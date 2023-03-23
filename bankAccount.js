/*
Simulate a bank account supporting opening/closing, withdrawals, and deposits of money. Watch out for concurrent transactions!

A bank account can be accessed in multiple ways. Clients can make deposits and withdrawals using the internet, mobile phones, etc. 
Shops can charge against the account.

Create an account that can be accessed from multiple threads/processes (terminology depends on your programming language).

It should be possible to close an account; operations against a closed account must fail.
*/

export class BankAccount {
  constructor() {
    this._balance = null
  }

  open() {
    if(this._balance === null) {
      this._balance = 0
    }
    else if(this._balance !== null) {
      throw new ValueError
    }
  }

  close() {
    if(this._balance !== null) {
      this._balance = null
    }
    else if(this._balance === null) {
      throw new ValueError
    }
  }

  deposit(amount) {
    if(this._balance !== null && amount > 0) {
      this._balance += amount
    }
    else {
      throw new ValueError
    }
  }

  withdraw(amount) {
    if(this._balance >= amount && amount > 0) {
      this._balance -= amount
    }
    else {
        throw new ValueError
    }
  }

  get balance() {
    if(this._balance !== null) {
    return this._balance
  } else {
      throw new ValueError
  }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
