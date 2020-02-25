"user strict";

var BankAccount = function() {
  this.balance = 0
  this.header = "date || credit || debit || balance\n"
  this.transactions = []
}

BankAccount.prototype.deposit = function(number, date = this.todaysDate()) {
  this.balance += number
  this.transactions.push(`${date} || ${number} || || ${this.totalBalance()}`)
  return number
}

BankAccount.prototype.withdraw = function(number, date = this.todaysDate()) {
  this.balance -= number
  this.transactions.push(`${date} || || ${number}|| ${this.totalBalance()}`)
  return number
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


BankAccount.prototype.printStatement = function() {
  return this.header + this.transactions.reverse().join('\n')
}





