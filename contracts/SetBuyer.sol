pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./ExternalCall.sol";
import "./ISetToken.sol";


contract IKyberNetworkProxy {
    function trade(
        address src,
        uint srcAmount,
        address dest,
        address destAddress,
        uint maxDestAmount,
        uint minConversionRate,
        address walletId
    )
        public
        payable
        returns(uint);
}


contract SetBuyer {
    using SafeMath for uint256;
    using ExternalCall for address;

    function buy(
        ISetToken set,
        bytes callDatas,
        uint[] starts // including 0 and LENGTH values
    )
        public
        payable
    {
        change(callDatas, starts);

        address[] memory components = set.getComponents();
        uint256[] memory units = set.getUnits();

        uint256 bestAmount = uint(-1);
        for (uint i = 0; i < components.length; i++) {
            IERC20 token = IERC20(components[i]);
            if (token.allowance(this, set) == 0) {
                require(token.approve(set, uint256(-1)), "Approve failed");
            }

            uint256 amount = token.balanceOf(this).div(units[i]);
            if (amount < bestAmount) {
                bestAmount = amount;
            }
        }

        set.mint(msg.sender, bestAmount);
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

    function change(bytes callDatas, uint[] starts) public payable { // starts should include 0 and callDatas.length
        for (uint i = 0; i < starts.length - 1; i++) {
            require(address(this).externalCall(0, callDatas, starts[i], starts[i + 1] - starts[i]));
        }
    }

    function sendEthValue(address target, bytes data, uint256 value) external {
        // solium-disable-next-line security/no-call-value
        require(target.call.value(value)(data));
    }

    function sendEthProportion(address target, bytes data, uint256 mul, uint256 div) external {
        uint256 value = address(this).balance.mul(mul).div(div);
        // solium-disable-next-line security/no-call-value
        require(target.call.value(value)(data));
    }

    function approveTokenAmount(address target, bytes data, IERC20 fromToken, uint256 amount) external {
        if (fromToken.allowance(this, target) != 0) {
             fromToken.approve(target, 0);
        }
        fromToken.approve(target, amount);
        require(target.call(data));
    }

    function approveTokenProportion(address target, bytes data, IERC20 fromToken, uint256 mul, uint256 div) external {
        uint256 amount = fromToken.balanceOf(this).mul(mul).div(div);
        if (fromToken.allowance(this, target) != 0) {
            fromToken.approve(target, 0);
        }
        fromToken.approve(target, amount);
        require(target.call(data));
    }

    function transferTokenAmount(address target, bytes data, IERC20 fromToken, uint256 amount) external {
        require(fromToken.transfer(target, amount));
        if (data.length != 0) {
            require(target.call(data));
        }
    }

    function transferTokenProportion(address target, bytes data, IERC20 fromToken, uint256 mul, uint256 div) external {
        uint256 amount = fromToken.balanceOf(this).mul(mul).div(div);
        require(fromToken.transfer(target, amount));
        if (data.length != 0) {
            // solium-disable-next-line security/no-low-level-calls
            require(target.call(data));
        }
    }

    function transferTokenProportionToOrigin(IERC20 token, uint256 mul, uint256 div) external {
        uint256 amount = token.balanceOf(this).mul(mul).div(div);
        // solium-disable-next-line security/no-tx-origin
        require(token.transfer(tx.origin, amount));
    }

    // Kyber Network

    function kyberSendEthProportion(IKyberNetworkProxy kyber, IERC20 fromToken, address toToken, uint256 mul, uint256 div) external {
        uint256 value = address(this).balance.mul(mul).div(div);
        kyber.trade.value(value)(
            fromToken,
            value,
            toToken,
            this,
            1 << 255,
            0,
            0
        );
    }

    function kyberApproveTokenAmount(IKyberNetworkProxy kyber, IERC20 fromToken, address toToken, uint256 amount) external {
        if (fromToken.allowance(this, kyber) == 0) {
            fromToken.approve(kyber, uint256(-1));
        }
        kyber.trade(
            fromToken,
            amount,
            toToken,
            this,
            1 << 255,
            0,
            0
        );
    }

    function kyberApproveTokenProportion(IKyberNetworkProxy kyber, IERC20 fromToken, address toToken, uint256 mul, uint256 div) external {
        uint256 amount = fromToken.balanceOf(this).mul(mul).div(div);
        this.kyberApproveTokenAmount(kyber, fromToken, toToken, amount);
    }
}
