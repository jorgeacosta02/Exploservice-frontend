import styles from './_Contacts.module.scss';
import { useState } from 'react';
import contactValidation from './ContactValidation';
import axios from 'axios';
import toast from 'react-hot-toast';


export interface FormDataShape {
  name: string,
  email: string,
  subject: string,
  message: string
}

const Contacts: React.FC = () => {

  const [formData, setFormData] = useState<FormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormDataShape>({
    name: "",
    email: "",
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    contactValidation(formData, setErrors);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/contactme", formData)
      toast.success("Mensaje enviado exitosamente!!")
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error: any) {
      // if (error.response && error.response.data && error.response.data.message) {
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
      <div className={styles.data}>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Envianos un mensaje</h2>
        <div>
          <div>
            <label htmlFor='name'>Nombre:  </label>
            <input
              type='text'
              id='name'
              name='name' 
              placeholder='Ingrese nombre'
              onChange={handleInputChange}/>
              <p>{errors.name}</p>
            </div>
          <div>
            <label htmlFor='email'>Email:  </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Ingrese email'
              onChange={handleInputChange}/>
               <p>{errors.email}</p>
            </div>
          <div>
            <label htmlFor='subject'>Asunto:  </label>
            <input
              type="text"
              id='subject'
              name='subject'
              placeholder='Ingrese asunto'
              onChange={handleInputChange}/>
            </div>
          <div>
            <label htmlFor="message">Mensaje:  </label>
            <textarea
              id='message'
              name='message'
              placeholder='Ingrese su mensaje aquí...'
              onChange={handleInputChange}
              required>
            </textarea>
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contacts
