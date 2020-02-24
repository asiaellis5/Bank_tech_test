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
      bankAccount.deposit(1000)
      expect(bankAccount.balance).toEqual(1000)
    })
  })

  describe("withdraw", function() {
    it("allows the user to withdraw from the account", function() {
      bankAccount.deposit(1000)
      bankAccount.withdraw(500)
      expect(bankAccount.balance).toEqual(500)
    })
  })

  describe('total', function() {
    it("works out the total balance of the account when money deposited", function() {
      bankAccount.deposit(1000)
      expect(bankAccount.totalBalance()).toEqual(1000)
    })
  })

})