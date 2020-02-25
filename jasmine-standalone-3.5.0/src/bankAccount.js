"user strict";

var BankAccount = function(statement) {
  this.balance = 0
  this.statement = statement
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
  this.statement.isPositive = true
  this.statement.createStatement(number, this.totalBalance())
  return number
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
  this.statement.isPositive = false
  this.statement.createStatement(number, this.totalBalance())
  return number
}

BankAccount.prototype.totalBalance = function() {
  return this.balance
}












