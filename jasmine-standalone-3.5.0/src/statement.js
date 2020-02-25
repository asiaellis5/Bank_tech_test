var Statement = function() {
  this.transactions = []
  this.isCredit = true
}

Statement.prototype.createStatement = function(number, totalBalance, date = this._transactionDate()) {
  if (this.isCredit) {
    this.transactions.push(`${date} || ${number.toFixed(2)} || || ${totalBalance.toFixed(2)}`)
  } else {
    this.transactions.push(`${date} || || ${number.toFixed(2)} || ${totalBalance.toFixed(2)}`)
  }
}

Statement.prototype.printStatement = function() {
  this.header = "date || credit || debit || balance\n"
  return this.header + this.transactions.reverse().join('\n')
}

Statement.prototype._transactionDate = function() {
  var date = new Date()
  var year = date.getFullYear()
  var month = String(date.getMonth() + 1).padStart(2, '0')
  var day = date.getDate()
  return `${day}` + '/' + `${month}` + '/' + `${year}`
}