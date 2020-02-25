"user strict";

var BankAccount = function(statement) {
  this.balance = 0
  this.statement = statement
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
  this.statement.createStatement(number, this.totalBalance(), "deposit")
  return number
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
  this.statement.createStatement(number, this.totalBalance(), "withdraw")
  return number
}

BankAccount.prototype.totalBalance = function() {
  return this.balance
}

BankAccount.prototype.printStatement = function() {
  return this.statement.printStatement()
}












