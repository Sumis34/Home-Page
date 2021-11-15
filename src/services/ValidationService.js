const validationErrors = {
    empty: "Bitte gibt einen Namen ein.",
    notFullName: "Bitte gib vor und nachname ein.",
    nameToLong: "Name zu lang.",
    invalidEmail: "Ungültige E-Mail."
}

const patterns = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

const ValidationService = {
    validateName: (value) => {

        let error = true;

        if(value.length < 1)
            error =  validationErrors.empty
        else if (value.length > 30)
            error = validationErrors.nameToLong
        else if (value.split(' ').length <= 1)
            error = validationErrors.notFullName
        else
            error = false

        return error 
    },

    validateEmail: (value) => {
        let error = true;

        if(!value.match(patterns.email))
            error =  validationErrors.empty
        else
            error = false

        return error 
    }
};

export default ValidationService;
