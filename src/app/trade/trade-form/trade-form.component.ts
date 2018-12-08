import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {SelectItem} from 'primeng/api';

library.add(fas, far, fab);

declare let require: any;
const tokenbArtifacts = require('./TokenABI.json');
const proxyArtifacts = require('./ProxyABI.json');

interface Token {
  address: string;
  icon: string;
  name: string;
  balance: Number;
  allowance: number;
}

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css']
})
export class TradeFormComponent implements OnInit {

  proxySmartContractAddress = '0x47739Ff19b02E13CD216C17B8F64ef09191D9Ec8';
  kyberNetworkContractAddress = '0x818e6fecd516ecc3849daf6845e3ec868087b755';

  displayBuyDialog = false;
  displaySellDialog = false;
  buy_amount = '0.01';
  sell_amount = '0.0';
  selected_token: Token;

  accounts: SelectItem[] = [];
  tokens: Token[] = [
    {
      address: '0xfa10e13fe555760a5297dc14eb6562a1a53e4e37',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/ethx_icon.svg',
      name: 'EthereumX',
      balance: Number(0),
      allowance: 0
    },
    {
      address: '0x02ec0c9e6d3c08b8fb12fec51ccba048afbc36a6',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/stableset.svg',
      name: 'StableSet',
      balance: Number(0),
      allowance: 0
    },
    {
      address: '0xf860f90e1f55e3528682e18850612cbb45bbf1bc',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/dex_icon.svg',
      name: 'DEXSet',
      balance: Number(0),
      allowance: 0
    },
  ];

  BalanceOfToken: any;

  run = false;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    EthereumXBalance: 0,
    DEXSetBalance: 0,
    StableSetBalance: 0,
    account: ''
  };

  displayBuyDialogTitle = '';
  displaySellDialogTitle = '';

  status = '';

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);

    this.watchAccount();
    this.watchTokenBalances();
    this.watchWalletBalances();
    this.getAllowance();

    this.selected_token = this.tokens[0];
  }

  showBuyDialog(token: Token) {
    this.selected_token = token;
    this.displayBuyDialogTitle = 'Buy ' + token.name + ' Token';
    this.displayBuyDialog = true;
  }

  showSellDialog(token: Token) {
    this.selected_token = token;
    this.displaySellDialogTitle = 'Sell ' + token.name + ' Token';
    this.displaySellDialog = true;
  }

  closeDialog() {
    this.displayBuyDialog = false;
    this.displaySellDialog = false;
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {

      console.log('Accounts: ', accounts);

      for (let i = 0; i < accounts.length; i++) {
        this.accounts.push({
          label: accounts[i],
          value: accounts[i],
        });
      }

      console.log('Accounts', this.accounts);

      this.model.account = accounts[0];
    });
  }

  async getAllowance() {

    if (!this.web3Service.web3 || !this.model.account || !this.tokens ) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;

      return await this.getAllowance();
    }

    for (let i = 0; i < this.tokens.length; i++) {
      try {
        const contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, this.tokens[i].address);

        this.tokens[i].allowance = await contract.methods
          .allowance(this.model.account, this.proxySmartContractAddress)
          .call();

    //    console.log('Allowance: ', this.tokens[i], this.tokens[i].allowance);
      } catch (e) {
        console.log(e);
        // this.setStatus('Error getting balance; see log.');
      }
    }

    setTimeout(() => this.getAllowance(), 1000);
  }

  async watchTokenBalances() {

    for (let i = 0; i < this.tokens.length; i++) {
      this.tokens[i].balance = await this.getTokenBalance(this.tokens[i].address);
    }

    setTimeout(() => this.watchTokenBalances(), 1000);
  }

  async watchWalletBalances() {

    if (!this.web3Service.web3 || !this.model.account) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;

      return await this.watchWalletBalances();
    }

    const balance = await this.web3Service.web3.eth.getBalance(this.model.account);

    this.model.balance = Number(this.web3Service.web3.utils.fromWei(
      balance || '0',
      'ether'
    ));

    // console.log('Wallet Balance', this.model.balance);

    setTimeout(() => this.watchWalletBalances(), 1000);
  }

  setStatus(status) {
    console.log('Status', status);
  }

  async approveToken(token: Token) {

    if (!this.web3Service.web3 || !this.model.account) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;

      return await this.approveToken(token);
    }

    const contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, token.address);

    try {
      await contract.methods
        .approve(this.proxySmartContractAddress, this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toBN(2).pow(this.web3Service.web3.utils.toBN(255))))
        .send({
          from: this.model.account
        });
    } catch (e) {
      console.log(e);
      // this.setStatus('Error! See log.');
    }
  }

  async getTokenBalance(address: string) {

    if (!this.web3Service.web3) {
      const delay = new Promise(resolve => setTimeout(resolve, 100));
      await delay;

      return await this.getTokenBalance(address);
    }

//    console.log('Refreshing balance');
    let balance;

    const contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, address);

    try {
      balance = await contract.methods
        .balanceOf(this.model.account)
        .call();

      // console.log('Token balance', address, balance);
    } catch (e) {
      // console.log(e);
      // this.setStatus('Error getting balance; see log.');
    }

    return Number(this.web3Service.web3.utils.fromWei(
      balance || '0',
      'ether'
    ));
  }

  async buy() {

    this.closeDialog();

    try {
      const proxyContract = new this.web3Service.web3.eth.Contract(proxyArtifacts, this.proxySmartContractAddress);

      const result = await proxyContract.methods
        .buy(this.selected_token.address, this.kyberNetworkContractAddress)
        .send({
          value: this.web3Service.web3.utils.toWei(
            this.buy_amount
          ),
          from: this.model.account
        });

      console.log('Buy result', result);
    } catch (e) {
      console.log(e);
      alert('Error: ' + e);
    }
  }


  async sell() {

    this.closeDialog();

    try {
      const proxyContract = new this.web3Service.web3.eth.Contract(proxyArtifacts, this.proxySmartContractAddress);

      const result = await proxyContract.methods
        .sell(
          this.selected_token.address,
          this.web3Service.web3.utils.toWei(
            this.sell_amount
          ),
          this.kyberNetworkContractAddress
        )
        .send({
          from: this.model.account
        });

      console.log('Buy result', result);
    } catch (e) {
      console.log(e);
      alert('Error: ' + e);
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }
}
