"use strict";

describe('BankAccount', function() {
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount;
  })

  describe('start amount', function() {
    it('the account starts empty', function() {
      expect(bankAccount.amount).toEqual(0)
    })
  })
})