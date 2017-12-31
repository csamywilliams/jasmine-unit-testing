var ValidateField = require("../app/ValidateField");

describe("telephone number UK", function () {

    it("should be defined", function () {

        var out = ValidateField.telephoneNumberUK();

        expect(out).toBeDefined();

    });

    it("should be 11 characters in length", function () {

        var out = ValidateField.telephoneNumberUK("12345678910");

        expect(out).toBe(true);

    });

    it("input value to be 5 characters in length", function () {

        var out = ValidateField.telephoneNumberUK("12345");

        expect(out).toBe(false);

    });

    
    it("input value to be empty string", function () {

        var out = ValidateField.telephoneNumberUK("");

        expect(out).toBe(false);

    });

    it("input value to be a valid number", function () {

        var out = ValidateField.telephoneNumberUK(12345678910);

        expect(out).toBe(true);

    });

    it("input value to be a invalid number", function () {

        var out = ValidateField.telephoneNumberUK(12345);

        expect(out).toBe(false);

    });



});   