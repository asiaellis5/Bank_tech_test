var Statement = function(bankAccount) {
  this.bankAccount = bankAccount
}

Statement.prototype.printStatement = function() {
  this.header = "date || credit || debit || balance\n"
  return this.header + this.bankAccount.transactions.reverse().join('\n')
}