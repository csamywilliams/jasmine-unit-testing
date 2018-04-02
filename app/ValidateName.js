
const ValidateName = function () {

    const firstnameAndLastname = function (name) {

        let isValid = false,
            regExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

            isValid = regExp.test(name);

        return isValid;
    };

    return {
        firstnameAndLastname: firstnameAndLastname
    };

} () ; 

module.exports = ValidateName;