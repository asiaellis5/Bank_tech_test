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
    })
  })

})