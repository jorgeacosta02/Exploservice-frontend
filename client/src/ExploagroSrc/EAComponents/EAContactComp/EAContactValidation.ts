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
export const EANameExistValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { name } = data;
 
    if (name === ''){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Ingresa un nombre"
        }))
    };
}


// EMAIL VALIDATIONS
export const EAEmailCorrectValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {

    const { email } = data;

    if (email !== '' && !emailRegex.test(email)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Debe ser una dirección de correo"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: '',
        }));
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
