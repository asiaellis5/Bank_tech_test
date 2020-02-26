describe("FeatureTests", function() {
  var statement;
  var bankAccount;
  var date;

  beforeEach(function(){
    statement = new Statement()
    bankAccount = new BankAccount(statement)
    date = statement._transactionDate()
  })

    it("prints the results in a table format for one line deposit", function() {
      bankAccount.deposit(1000)
      expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n${date} || 1000.00 || || 1000.00`)
    })

    it("prints the results in table format when two deposits", function() {
      bankAccount.deposit(1000)
      bankAccount.deposit(2000)
      expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n${date} || 2000.00 || || 3000.00\n${date} || 1000.00 || || 1000.00`)
    })

    it("prints the results in table when you deposit and withdraw", function() {
      bankAccount.deposit(2000)
      bankAccount.withdraw(1000)
      expect(statement.printStatement()).toEqual(`date || credit || debit || balance\n${date} || || 1000.00 || 1000.00\n${date} || 2000.00 || || 2000.00`)
    })
})