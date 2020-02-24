"user strict";

var BankAccount = function() {
  this.balance = 0
  this.transactions = ["date || credit || debit || balance"]
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
  this.transactions.push(`${this.todaysDate()} || ${number} || || ${this.balance}`)
  return number
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
  this.transactions.push(`${this.todaysDate()} || || ${number}|| ${this.balance}`)
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


BankAccount.prototype.print = function() {
  return this.transactions.join('\n')
}





