
const Email = function () {

    const validAddress = function (emailInput) {

        let isValid = false,
            regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            isValid = regExp.test(emailInput);

        return isValid;
    };

    return {
        validAddress: validAddress
    };

} () ; 

module.exports = Email;