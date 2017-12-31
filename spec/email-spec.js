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

    it("should be true, contain a valid email address", function () {

        var out = email.validAddress("test@gmail.com");

        expect(out).toBe(true);

    });

    it("should be false, contains an invalid email address", function () {

        var out = email.validAddress("testgmail.com");

        expect(out).toBe(false);

    });

});   