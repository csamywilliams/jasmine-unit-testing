var ValidateName = require("../app/ValidateName");

describe("validate name - first name", function () {

    it("should be defined", function () {

        var out = ValidateName.firstnameAndLastname();

        expect(out).toBeDefined();

    });

    it("should return true when given a correct first and last name with a space between", function () {

        var out = ValidateName.firstnameAndLastname("Amy Williams");

        expect(out).toBe(true);

    });

    it("should return true when given a correct first, middle and last name with a space between each", function () {

        var out = ValidateName.firstnameAndLastname("Amy Blodwyn Williams");

        expect(out).toBe(true);

    });

    it("should return true when given a correct first and last name with hyphens and a space between", function () {

        var out = ValidateName.firstnameAndLastname("Amy-Lou Williams");

        expect(out).toBe(true);

    });

    it("should return true when given a correct first, middle and last name with hyphens and a space between", function () {

        var out = ValidateName.firstnameAndLastname("Amy Lou Bo-Williams");

        expect(out).toBe(true);

    });

    it("should return false when given an incorrect first and last name containing numbers", function () {

        var out = ValidateName.firstnameAndLastname("Amy1 Williams");

        expect(out).toBe(false);

    });

    it("should return false when given an incorrect first and last name containing special characters", function () {

        var out = ValidateName.firstnameAndLastname("Amy* *Williams");

        expect(out).toBe(false);

    });

    it("should return true when given a correct first and last name containing accented characters", function () {

        var out = ValidateName.firstnameAndLastname("Renée Williams");

        expect(out).toBe(true);

    });




});   