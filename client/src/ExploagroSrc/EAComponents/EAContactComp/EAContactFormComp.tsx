import { useEffect, useState } from 'react';
import {
  EANameCorrectValidation,
  EANameExistValidation,
  EAEmailCorrectValidation
} from './EAContactValidation';

import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './_EAContactFormComp.module.scss';


export interface FormDataShape {
  name: string,
  email: string,
  subject: string,
  message: string
}

const EAContactFormComp: React.FC = () => {

  const [formData, setFormData] = useState<FormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  let submitOk = false;

  if(
    formData.name !== '' &&
    formData.email !== '' &&
    formData.subject !== '' &&
    formData.message !== '' &&
    errors.name === '' &&
    errors.email === '' &&
    errors.subject === '' &&
    errors.message === '' 
  ){
    submitOk = true;
  };

  useEffect(() => {
    EANameCorrectValidation(formData, setErrors);
    EAEmailCorrectValidation(formData, setErrors);
  },[formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
    console.log(formData, errors);
  };

  const handleCheck: any () => {
    EANameCorrectValidation(formData,setErrors)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await axios.post("exploagro/contact", formData)
      toast.success("Mensaje enviado exitosamente!!")
      setTimeout(() => {
        window.location.href = '/exploagro';
      }, 2000);
    } catch (error: any) {

    if (error?.response?.data?.message) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
      toast.error("Error al enviar el mensaje.");
      }
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.data}>
      </div> */}
      <form onSubmit={handleSubmit}>
        <h2>Envianos un mensaje</h2>
        <div>
          <div className={styles.inputBlock}>
            <label htmlFor='name'>Nombre:  </label>
            <input
              type='text'
              id='name'
              name='name' 
              placeholder='Ingresa nombre'
              value={formData.name}
              onChange={handleInputChange}/>
          </div>
            <p>{errors.name}</p>
          <div className={styles.inputBlock}>
            <label htmlFor='email'>Email:  </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Ingresa email'
              onChange={handleInputChange}/>
          </div>
              <p>{errors.email}</p>
          <div className={styles.inputBlock}>
            <label htmlFor='subject'>Asunto:  </label>
            <input
              type="text"
              id='subject'
              name='subject'
              placeholder='Ingresa asunto'
              onChange={handleInputChange}/>
          </div>
          <div className={styles.textareaBlock}>
            <label htmlFor="message">Mensaje:  </label>
            <textarea
              id='message'
              name='message'
              placeholder='Ingresa tu mensaje aquí...'
              onChange={handleInputChange}
              required>
            </textarea>
          </div>
        </div>
        <div className={styles.submitBox}>
          <button
            type='submit'
            className={styles.submit}
            disabled={!submitOk}
            // onClick={handleCheck}
          >
           Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EAContactFormComp
