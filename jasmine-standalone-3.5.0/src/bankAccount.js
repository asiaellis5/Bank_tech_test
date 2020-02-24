"user strict";

var BankAccount = function() {
  this.balance = 0
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
}

BankAccount.prototype.totalBalance = function() {
  return this.balance
}




