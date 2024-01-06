import { FormDataShape } from "./EAContactFormComp"

const EAcontactValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
    const { name, email } = data;
   
    // REGEX
    const nameRegex = /^[a-zA-Z\s'-]+$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // NAME VALIDATION
    if (!name) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Ingresa tu nombre",
        }));
    } else if (!nameRegex.test(name)){
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
    // EMAIL VALIDATION
    if (!email) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Ingrese su email",
        }));
    } else if (!emailRegex.test(email)){
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
export default EAcontactValidation