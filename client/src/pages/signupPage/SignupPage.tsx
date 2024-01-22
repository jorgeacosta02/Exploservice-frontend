import styles from './_SignupPage.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  dni: number;
}

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  
  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const dni = watch('dni');

  console.log('Watched Fields:', { firstName, lastName, dni });


  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>
          Registrar persona
        </h1>
        <div className={styles.inputBlock}>
          {/* <label htmlFor='firstName'>Nombre</label> */}
          <input {...register(
              'firstName',
              { required: 'El nombre es requerido' })}
              placeholder='Ingrese nombre...'
          />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          {/* <label htmlFor='lastName'>Apellido</label> */}
          <input {...register(
            'lastName',
            { required: 'El apellido es requerido' })}
            placeholder='Ingrese apellido...'
          />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div className={styles.inputBlock}>
          {/* <label htmlFor='firstName'>dni</label> */}
          <input {...register(
            'dni',
            { required: 'El dni es requerido' })}
            placeholder='Ingrese dni...'
          />
        {errors.dni && <span>{errors.dni.message}</span>}
        </div>
      </form>
    </div>
  )
}

export default SignupPage
