import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {SelectItem} from 'primeng/api';

library.add(fas, far, fab);

declare let require: any;
const artifacts = require('./BalanceOfABI.json');

interface Token {
  address: string;
  icon: string;
  name: string;
  balance: Number;
}

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css']
})
export class TradeFormComponent implements OnInit {

  display = false;

  accounts: SelectItem[] = [];
  tokens: Token[] = [
    {
      address: '0xfa10e13fe555760a5297dc14eb6562a1a53e4e37',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/ethx_icon.svg',
      name: 'EthereumX',
      balance: Number(0),
    },
    {
      address: '0x02ec0c9e6d3c08b8fb12fec51ccba048afbc36a6',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/stableset.svg',
      name: 'StableSet',
      balance: Number(0),
    },
    {
      address: '0xf860f90e1f55e3528682e18850612cbb45bbf1bc',
      icon: 'https://s3.amazonaws.com/set-core/img/set-icons/dex_icon.svg',
      name: 'DEXSet',
      balance: Number(0),
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
  }

  showDialog() {
    this.display = true;
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

  async watchTokenBalances() {

    for (let i = 0; i < this.tokens.length; i++) {
      this.tokens[i].balance = await this.getTokenBalance(this.tokens[i].address);
    }

    setTimeout(() => this.watchTokenBalances(), 10000);
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

    console.log('Wallet Balance', this.model.balance);

    setTimeout(() => this.watchWalletBalances(), 10000);
  }

  setStatus(status) {
    console.log('Status', status);
  }

  async sendCoin() {
    if (!this.BalanceOfToken) {
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedBalanceOfToken = await this.BalanceOfToken.deployed();
      const transaction = await deployedBalanceOfToken.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
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

    const contract = await this.web3Service.artifactsToContract(artifacts, address);

    try {
      balance = await contract.methods
        .balanceOf(this.model.account)
        .call();

      console.log('Token balance', address, balance);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }

    return Number(this.web3Service.web3.utils.fromWei(
      balance || '0',
      'ether'
    ));
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
