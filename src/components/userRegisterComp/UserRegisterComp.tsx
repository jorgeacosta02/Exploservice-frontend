import styles from './_UserRegisterComp.module.scss';
import { useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { Link } from 'react-router-dom';
import { IUserRegisterData } from '../../Interfaces/userInterfaces';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';






const UserRegisterComp = () => {

   // Estados globales para opciones
  const langState = useSelector(selectLangState);
  const dispatch = useDispatch()
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IUserRegisterData>({
    firstName: '',
    lastName: '',
    dni: '',
    birthDate:'',
    phone: '',
    email: '',
    password: '',
    role:''
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<IUserRegisterData>({
    firstName: '',
    lastName: '',
    dni: '',
    birthDate:'',
    phone: '',
    email: '',
    password: '',
    role:''
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.firstName  !== '' &&
    formData.lastName  !== '' &&
    formData.dni  !== '' &&
    formData.birthDate !== '' &&
    formData.phone  !== '' &&
    formData.email  !== '' &&
    formData.password  !== '' &&
    formData.role !== ''
  ){
    submitOk = true;
  };
   
   // Expresiones de validación
   const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
   const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     // Valida solo letras
     if (name === 'name'){
       if(!nameRegExp.test(value)){
         setErrors((prevData) => ({
           ...prevData,
           [name]: langState === 'es' ? 'El nombre debe contener solo letras.' : 'The name must contain only letters.',
         }));
       }else{
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
         setErrors((prevData) => ({
           ...prevData,
           [name]: '',
         }));
       }
     }
 
     // Valida campo email
     if (name === 'email'){
       if(!emailRegExp.test(value)){
         setErrors((prevData) => ({
           ...prevData,
           [name]: langState === 'es' ? 'Debe ingresar un mail válido.': 'You must enter  a valid email.',
         }));
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
       }else{
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
         setErrors((prevData) => ({
           ...prevData,
           [name]: '',
         }));
       }
     }
     if (name === 'subject' || name === 'message'){
        setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
       setErrors((prevData) => ({
         ...prevData,
         [name]: '',
       }));
     }
     console.log('name y value in handleInputChange: ',name, value);
     console.log('formData y errors in handleInputChange: ',formData, errors);
   }
 
   const emptyMessage = langState === 'es' ?
     'Este campo debe ser completado.' :
     'This field must be filled out.';
 
   const emptyValidationHandler =()=>{
     if(!formData.firstName){
       setErrors((prevData) => ({
         ...prevData,
         firstName: emptyMessage,
       }));
     };
     if(!formData.email){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
     if(!formData.lastName){
       setErrors((prevData) => ({
         ...prevData,
         lastName: emptyMessage,
       }));
     };
     if(!formData.dni){
       setErrors((prevData) => ({
         ...prevData,
         dni: emptyMessage,
       }));
     };
     if(!formData.birthDate){
       setErrors((prevData) => ({
         ...prevData,
         birthDate: emptyMessage,
       }));
     };
     if(!formData.phone){
       setErrors((prevData) => ({
         ...prevData,
         phone: emptyMessage,
       }));
     };
     if(!formData.email){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
     if(!formData.password){
       setErrors((prevData) => ({
         ...prevData,
         password: emptyMessage,
       }));
     };
     if(!formData.role){
       setErrors((prevData) => ({
         ...prevData,
         role: emptyMessage,
       }));
     };
   };
   
   // constantes de estilos para dark-mode

   
   const handleSubmit = (event:any) => {
     event.preventDefault();
     console.log('submit')
     if(!submitOk) return emptyValidationHandler();
     submitForm();
   }
   
   const messageHandleClick = () => {
     dispatch( toggleMessage() );
   };
 
   const submitForm = async () => {
     try{
       const response = await axios.post(
         // 'https://newportfolio-backend.onrender.com/contact',
         'http://localhost:5001/contact',
          formData
       );
       console.log('response', response.status);
       // queryResponse = await response.status;
       setFormData({
         name:'',
         email:'',
         subject:'',
         message:''
       })
 
       messageHandleClick()
 
       // const toastOptions: ToastOptions = {
       //   style: {
       //     background: '#333',
       //     color: '#fff',
       //     zIndex: 2100,
       //     position: 'absolute' // Posición del toast
       //     // Otros estilos según sea necesario
       //   },
       //   position: 'top-right' // Posición del toast
       // };
       
       // toast.success("Mensaje enviado correctamente", toastOptions);
     }catch(error:any){
       console.log(error.message)
     }
   }

  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={styles.title}>
            Registrarse
          </h1>
          <div className={styles.inputBlock}>
            <label htmlFor='firstName'>Nombre</label>
            <input {...register('firstName')}
                placeholder='Ingrese nombre...'
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='lastName'>Apellido</label>
            <input {...register(
                'lastName',
                { required: 'El apellido es requerido' })}
                placeholder='Ingrese apellido...'
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='dni'>Dni</label>
            <input type='text' {...register(
              'dni',
              { required: 'El dni es requerido' })}
              placeholder='Ingrese dni...'
            />
            {errors.dni && <span>{errors.dni.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='healthPlan'>Obra social</label>
            <input {...register(
                'healthPlan',
              )}
                placeholder='Ingrese su obra social...'
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='phone'>Teléfono</label>
            <input {...register(
                'phone',
                { required: 'El número de teléfono es requerido' })}
                placeholder='Ingrese número de teléfono...'
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='email'>Correo</label>
            <input {...register(
              'email',
              { required: 'El email es requerido' })}
              placeholder='Ingrese correo...'
            />
          {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' {...register(
              'password',
              { required: 'La contraseña es requerida' })}
              placeholder='Ingrese contraseña...'
            />
          {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar formulario
          </button>
        </form>
        <p className={styles.linkContainer}>
          Ya tenés una cuenta?
          <Link 
            to='/user-login'
            className={styles.login}
          >
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserRegisterComp

