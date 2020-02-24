"user strict";

var BankAccount = function() {
  this.balance = 0
  this.depositAmount = 0
  this.withdrawAmount = 0
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
  this.depositAmount = number
  return this.depositAmount
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
  this.withdrawAmount = number
  return this.withdrawAmount
}

BankAccount.prototype.totalBalance = function() {
  return this.balance
}

BankAccount.prototype.print = function() {
  var date = '24/02/2020'
  return `date || credit || debit || balance\n ${date} || ${this.depositAmount} || || ${this.balance}`
}





