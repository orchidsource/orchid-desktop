import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


const gbOrcRatio: number = 5.899;
const usdOrcRatio: number = 6.685;
const WALLET_ADDRESS: string = '0x177b46f8fCf57C5CA32747ecf57ed359481b16eD';

/**
* Service for handling a user's wallet.
* Currently just a mock
*/
@Injectable()
export class WalletService {

  private orcBalance: number = 0;

  constructor() { }

  /**
  * TODO: return as observable
  * @return [description]
  */
  getOctBalance(): number {
    return this.orcBalance;
  }

  getGBRemaining(): number {
    return this.orcBalance * gbOrcRatio;
  }

  getUSDBalance(): number {
    return this.orcBalance * usdOrcRatio;
  }

  getWalletAddress(): string {
    return WALLET_ADDRESS;
  }

  /// Mock; holds transactions
  private  transactions: object[] = [];

  /** get a list of getTransactions
   * TODO: create transaction type
   * TODO: this will need parameters
  */
  getTransactions(): object[] {
    return this.transactions;
  }

  mockSomeTransaction(): void {
    var today = new Date();

    for (let i = 0; i < 10; i ++) {
      this.transactions.push({
        from: 'X09HS7GHFFIDXIANGIA',
        to: 'F10HW40HFFIGXIACQIA',
        status: (i % 2) ? 'sent' : 'received',
        amount: 1 + i * 10.25,
        date: new Date(today.getFullYear(), today.getUTCMonth(), today.getUTCDay() - i)
      })
    }
  }

  mockTransaction(amount: number, status: string): void {
      this.transactions.push({
        from: 'X09HS7GHFFIDXIANGIA',
        to: WALLET_ADDRESS,
        status: status,
        amount: amount,
        date: new Date()
      })

  }

  /**
  * Debits the specified amount from the user's wallet
  * TODO: mock function
  * @param  amount amount to debit
  * @return        A promise
  */
  debitOrc(amount: number): Promise<string> {
    if (amount > this.orcBalance){
      return Promise.reject('You do not have enough credits');
    }

    this.orcBalance = this.orcBalance - amount;
    this.mockTransaction(amount, 'sent');
    return Promise.resolve('')
  }

  creditOrc(amount: number): Promise<string> {
    this.orcBalance += amount;
    this.mockTransaction(amount, 'received');
    return Promise.resolve('');
  }
}
