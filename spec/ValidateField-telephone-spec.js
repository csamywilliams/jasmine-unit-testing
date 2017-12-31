var ValidateField = require("../app/ValidateField");

describe("telephone number UK", function () {

    it("should be defined", function () {

        var out = ValidateField.telephoneNumberUK();

        expect(out).toBeDefined();

    });



});   