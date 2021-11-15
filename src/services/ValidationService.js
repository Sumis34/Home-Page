const validationErrors = {
    empty: "Bitte gibt dein Namen ein.",
    notFullName: "Bitte gib vor und nachname ein.",


}

const ValidationService = {
    validateName: (value) => {

        let error = true;

        switch (value){
            case value.length < 1:
                error =  validationErrors.empty
                break;
            case value.split(' ').length <= 1:
                error = validationErrors.notFullName
                break;
            default:
                error = false
                console.log(value.length)
        }

        return error 
    },

    validateEmail: (value) => {
        //inspect the value
    }
};

export default ValidationService;
