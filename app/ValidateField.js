
const ValidateField = function () {

    const emailAddress = function (emailInput) {

        let isValid = false,
            regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            isValid = regExp.test(emailInput);

        return isValid;
    },

    telephoneNumberUK = function () {
        return true;
    };

    return {
        emailAddress: emailAddress,
        telephoneNumberUK: telephoneNumberUK
    };

} () ; 

module.exports = ValidateField;