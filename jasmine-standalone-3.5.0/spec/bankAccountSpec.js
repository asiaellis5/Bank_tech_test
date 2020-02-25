"use strict";

describe('BankAccount', function() {
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount;
  })

  describe('starting balance', function() {
    it('the account starts empty', function() {
      expect(bankAccount.balance).toEqual(0)
    })
  })

  describe("deposit", function() {
    it("allows the user to deposit into the account", function(){
      expect(bankAccount.deposit(1000)).toEqual(1000)
      expect(bankAccount.balance).toEqual(1000)
    })
  })

  describe("withdraw", function() {
    it("allows the user to withdraw from the account", function() {
      bankAccount.deposit(1000)
      expect(bankAccount.withdraw(500)).toEqual(500)
      expect(bankAccount.balance).toEqual(500)
    })
  })

  describe('total', function() {
    it("works out the total balance of the account when money deposited", function() {
      bankAccount.deposit(1000)
      expect(bankAccount.totalBalance()).toEqual(1000)
    })

    it( "works when depositing and withdrawing money", function() {
      bankAccount.deposit(1000)
      bankAccount.withdraw(500)
      expect(bankAccount.totalBalance()).toEqual(500)
    })
  })

  describe("todaysDate", function() {
    it("prints todays date", function() {
      expect(bankAccount.todaysDate()).toEqual('24/02/2020')
    })
  })

  describe("printStatement", function() {
    it("prints the results in a table format for one line deposit", function() {
      bankAccount.deposit(1000, '24/02/2020')
      expect(bankAccount.printStatement()).toEqual("date || credit || debit || balance\n24/02/2020 || 1000 || || 1000")
    })

    it("prints the results in table format when two deposits", function() {
      bankAccount.deposit(1000, '24/02/2020')
      bankAccount.deposit(2000, '25/02/2020')
      expect(bankAccount.printStatement()).toEqual("date || credit || debit || balance\n25/02/2020 || 2000 || || 3000\n24/02/2020 || 1000 || || 1000")
    })

    it("prints the results in table when you deposit and withdraw", function() {
      bankAccount.deposit(2000, '24/02/2020')
      bankAccount.withdraw(1000, '24/02/2020')
      expect(bankAccount.printStatement()).toEqual("date || credit || debit || balance\n24/02/2020 || || 1000|| 1000\n24/02/2020 || 2000 || || 2000")
    })
  })

})