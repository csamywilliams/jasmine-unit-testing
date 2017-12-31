
const ValidateField = function () {

    const telephoneLengthUK = 11;

    const emailAddress = function (emailInput) {

        let isValid = false,
            regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            isValid = regExp.test(emailInput);

        return isValid;
    },

    telephoneNumberUK = function (phoneInput) {

        let isValid = false;

        if(typeof phoneInput === "undefined" || phoneInput === null) {

            return isValid;

        }

        let input = phoneInput.toString();

        if(input.length > 0 && input.length === telephoneLengthUK) {

            isValid = true;

        }

        return isValid;
    };

    return {
        emailAddress: emailAddress,
        telephoneNumberUK: telephoneNumberUK
    };

} () ; 

module.exports = ValidateField;