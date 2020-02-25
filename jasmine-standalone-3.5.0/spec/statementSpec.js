"use strict";

describe("statement", function() {
  var statement;
  var date;

  beforeEach(function(){
    statement = new Statement()
    date = "25/02/2020"
  })

  describe("createStatement", function() {
    it("creates a credit string if money deposited", function() {
      statement.createStatement(1000, 1000, "deposit")
      expect(statement.transactions[0]).toEqual("25/02/2020 || 1000.00 || || 1000.00")
    })

    it("creates a debit string if money withdrawn", function() {
      statement.createStatement(500, -500, "withdraw", date)
      expect(statement.transactions[0]).toEqual("25/02/2020 || || 500.00 || -500.00")
    })

    it("creates a credit and a debit string if money deposited and withdrawn", function() {
      statement.createStatement(1000, 1000, "deposit", date)
      statement.createStatement(500, 500, "withdraw", date)
      expect(statement.transactions[0]).toEqual("25/02/2020 || 1000.00 || || 1000.00")
      expect(statement.transactions[1]).toEqual("25/02/2020 || || 500.00 || 500.00")
    })
  })

  describe("printStatement", function() {
    it("prints all statements when two deposit created", function() {
      statement.createStatement(1000, 1000, "deposit", date)
      statement.createStatement(2000, 3000, "deposit", date)
      expect(statement.printStatement()).toEqual("date || credit || debit || balance\n25/02/2020 || 2000.00 || || 3000.00\n25/02/2020 || 1000.00 || || 1000.00")
    })

    it("prints all statements when two withdraws created", function() {
      statement.createStatement(500, -500, "withdraw", date)
      statement.createStatement(500, -1000, "withdraw", date)
      expect(statement.printStatement()).toEqual("date || credit || debit || balance\n25/02/2020 || || 500.00 || -1000.00\n25/02/2020 || || 500.00 || -500.00")
    })

    it("prints all statements with one deposit and one withdraw", function() {
      statement.createStatement(1000, 1000, "deposit", date)
      statement.createStatement(500, 500, "withdraw", date)
      expect(statement.printStatement()).toEqual("date || credit || debit || balance\n25/02/2020 || || 500.00 || 500.00\n25/02/2020 || 1000.00 || || 1000.00")
    })
  })
})

  