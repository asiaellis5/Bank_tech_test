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

BankAccount.prototype.todaysDate = function() {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return `${day}` + '/0' + `${month}` + '/' + `${year}`
}


BankAccount.prototype.print = function() {
  return `date || credit || debit || balance\n ${this.todaysDate()} || ${this.depositAmount} || || ${this.balance}`
}





