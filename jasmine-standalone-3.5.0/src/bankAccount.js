"user strict";

var BankAccount = function() {
  this.balance = 0
  this.transactions = []
  this.isPositive = true
}

BankAccount.prototype.deposit = function(number) {
  this.balance += number
  this.isPositive = true
  this._createStatement(number)
  return number
}

BankAccount.prototype.withdraw = function(number) {
  this.balance -= number
  this.isPositive = false
  this._createStatement(number)
  return number
}

BankAccount.prototype.totalBalance = function() {
  return this.balance
}

BankAccount.prototype._todaysDate = function() {
  var date = new Date()
  var year = date.getFullYear()
  var month = String(date.getMonth() + 1).padStart(2, '0')
  var day = date.getDate()
  return `${day}` + '/' + `${month}` + '/' + `${year}`
}

BankAccount.prototype._createStatement = function(number, date = this._todaysDate()) {
  if (this.isPositive) {
    this.transactions.push(`${date} || ${number.toFixed(2)} || || ${this.totalBalance().toFixed(2)}`)
  } else {
    this.transactions.push(`${date} || || ${number.toFixed(2)} || ${this.totalBalance().toFixed(2)}`)
  }
}








