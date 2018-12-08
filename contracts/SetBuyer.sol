pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./ExternalCall.sol";
import "./ISetToken.sol";


contract IKyberNetworkProxy {
    function tradeWithHint(
        address src,
        uint256 srcAmount,
        address dest,
        address destAddress,
        uint256 maxDestAmount,
        uint256 minConversionRate,
        address walletId,
        bytes hint
    )
        public
        payable
        returns(uint);

    function getExpectedRate(
        address source,
        address dest,
        uint srcQty
    )
        public
        view
        returns (
            uint expectedPrice,
            uint slippagePrice
        );
}


contract SetBuyer {
    using SafeMath for uint256;
    using ExternalCall for address;

    address constant public ETHER_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    function buy(
        ISetToken set,
        IKyberNetworkProxy kyber
    )
        public
        payable
    {
        address[] memory components = set.getComponents();
        uint256[] memory units = set.getUnits();

        uint256 weightSum = 0;
        uint256[] memory weight = new uint256[](components.length);
        for (uint i = 0; i < components.length; i++) {
            (weight[i], ) = kyber.getExpectedRate(components[i], ETHER_ADDRESS, units[i]);
            weightSum = weightSum.add(weight[i]);
        }

        uint256 fitMintAmount = uint256(-1);
        for (i = 0; i < components.length; i++) {
            IERC20 token = IERC20(components[i]);

            if (token.allowance(this, set) == 0) {
                require(token.approve(set, uint256(-1)), "Approve failed");
            }

            uint256 amount = msg.value.mul(weight[i]).div(weightSum);
            uint256 received = kyber.tradeWithHint.value(amount)(
                ETHER_ADDRESS,
                amount,
                components[i],
                this,
                1 << 255,
                0,
                0,
                ""
            );

            if (received / units[i] < fitMintAmount) {
                fitMintAmount = received / units[i];
            }
        }

        set.issue(fitMintAmount * set.naturalUnit());
        set.transfer(msg.sender, set.balanceOf(this));

        if (address(this).balance > 0) {
            msg.sender.transfer(address(this).balance);
        }
        for (i = 0; i < components.length; i++) {
            token = IERC20(components[i]);
            if (token.balanceOf(this) > 0) {
                require(token.transfer(msg.sender, token.balanceOf(this)), "transfer failed");
            }
        }
    }

    function() public payable {
        require(tx.origin != msg.sender);
    }

    function sell(
        ISetToken set,
        uint256 amountArg,
        IKyberNetworkProxy kyber
    )
        public
    {
        uint256 naturalUnit = set.naturalUnit();
        uint256 amount = amountArg.div(naturalUnit).mul(naturalUnit);

        set.transferFrom(msg.sender, this, amount);
        set.redeem(amount);

        address[] memory components = set.getComponents();

        for (uint i = 0; i < components.length; i++) {
            IERC20 token = IERC20(components[i]);

            if (token.allowance(this, kyber) == 0) {
                require(token.approve(set, uint256(-1)), "Approve failed");
            }

            kyber.tradeWithHint(
                components[i],
                amount,
                ETHER_ADDRESS,
                this,
                1 << 255,
                0,
                0,
                ""
            );

            if (token.balanceOf(this) > 0) {
                require(token.transfer(msg.sender, token.balanceOf(this)), "transfer failed");
            }
        }

        if (address(this).balance > 0) {
            msg.sender.transfer(address(this).balance);
        }
    }
}
