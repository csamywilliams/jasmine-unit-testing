var ValidateField = require("../app/ValidateField");

describe("email address", function () {

    it("should be defined", function () {

        var out = ValidateField.emailAddress();

        expect(out).toBeDefined();

    });

    it("should be false", function () {

        var out = ValidateField.emailAddress();

        expect(out).toBe(false);

    });

    it("should be true, contain a valid email address", function () {

        var out = ValidateField.emailAddress("test@gmail.com");

        expect(out).toBe(true);

    });

    it("should be false, contains an invalid email address", function () {

        var out = ValidateField.emailAddress("testgmail.com");

        expect(out).toBe(false);

    });

    it("should be false, contains an empty string", function () {

        var out = ValidateField.emailAddress("");

        expect(out).toBe(false);

    });

    it("should be false, contains a null value", function () {

        var out = ValidateField.emailAddress(null);

        expect(out).toBe(false);

    });

    it("should be false, contains undefined", function () {

        var out = ValidateField.emailAddress(undefined);

        expect(out).toBe(false);

    });

    it("should be true, handle mixed values incl numbers", function () {

        var out = ValidateField.emailAddress("test123@gmail.com");

        expect(out).toBe(true);

    });

    it("should be true, handle mixed values incl uppercase", function () {

        var out = ValidateField.emailAddress("TEST123@gmail.com");

        expect(out).toBe(true);

    });



});   