import styles from './_Contacts.module.scss';
import { useState } from 'react';


interface FormData {
  name: string,
  email: string,
  subject: string,
  message: string
}

const Contacts: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.data}>
      </div>
      <form action="">
        <h2>Envianos un mensaje</h2>
        <div>
          <div>
            <label htmlFor='name'>Nombre:  </label>
            <input
              type='text'
              id='name'
              name='name' 
              placeholder='Ingrese nombre'/>
            </div>
          <div>
            <label htmlFor='email'>Email:  </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Ingrese email'/>
            </div>
          <div>
            <label htmlFor='subject'>Asunto:  </label>
            <input type="text" id='subject' placeholder='Ingrese asunto'/>
            </div>
          <div>
            <label htmlFor="message">Mensaje:  </label>
            <textarea id='message' name='message' placeholder='Ingrese su mensaje aquí...' required></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacts
