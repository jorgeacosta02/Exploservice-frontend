import { FormDataShape } from "./EAContactFormComp"


// REGEX
const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// NAME VALIDATIONS
export const EANameCorrectValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { name } = data;
 
    if (name !== '' && !nameRegex.test(name)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "El nombre debe contener solo letras"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: '',
        }));
    };

}
export const EANameExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { name } = data;
 
    if (name === ''){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: 'Ingresa un nombre'
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: ''
        }))
    };
}


// EMAIL VALIDATIONS
export const EAEmailCorrectValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {

    const { email } = data;

    if (email !== '' && !emailRegex.test(email)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Debe ser una dirección de email"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: '',
        }));
    };
}

export const EAEmailExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { email } = data;
 
    if (email === ''){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Ingresa un email"
        }))
    };
}

// SUBJECT VALIDATIONS
export const EASubjectExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { subject } = data;
 
    if (subject === ''){
        setErrors((prevErrors) => ({
            ...prevErrors,
            subject: 'Ingresa un asunto'
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            subject: ''
        }))
    };
}

// MESSAGE VALIDATIONS
export const EAMessageExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { message } = data;
 
    if (message === ''){
        setErrors((prevErrors) => ({
            ...prevErrors,
            message: "Ingresa un mensaje"
        }))
    };
}



    // NAME VALIDATION
    // if (!name) {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         name: "Ingresa tu nombre",
    //     }));
    // } else if (!nameRegex.test(name)){
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         name: "El nombre debe contener solo letras"
    //     }))
    // } else {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         name: '',
    //     }));
    // };
    // EMAIL VALIDATION
    // if (!email) {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: "Ingrese su email",
    //     }));
    // } else if (!emailRegex.test(email)){
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: "Debe ser una dirección de email"
    //     }))
    // } else {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: '',
    //     }));
    // };
