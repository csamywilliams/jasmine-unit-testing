var email = require("../app/email");

describe("email address", function () {

    it("should be defined", function () {

        var out = email.validAddress();

        expect(out).toBeDefined();

    });

    it("should be false", function () {

        var out = email.validAddress();

        expect(out).toBe(false);

    });

});   