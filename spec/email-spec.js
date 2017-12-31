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

    it("should be false, contains an empty string", function () {

        var out = email.validAddress("");

        expect(out).toBe(false);

    });

    it("should be false, contains a null value", function () {

        var out = email.validAddress(null);

        expect(out).toBe(false);

    });

    it("should be false, contains undefined", function () {

        var out = email.validAddress(undefined);

        expect(out).toBe(false);

    });

    it("should be true, handle mixed values incl numbers", function () {

        var out = email.validAddress("test123@gmail.com");

        expect(out).toBe(true);

    });

    it("should be true, handle mixed values incl uppercase", function () {

        var out = email.validAddress("TEST123@gmail.com");

        expect(out).toBe(true);

    });



});   