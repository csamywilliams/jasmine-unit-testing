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



});   