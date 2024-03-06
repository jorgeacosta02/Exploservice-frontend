import styles from './_InvMovFormComp.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { IArticleData } from '../../Interfaces/articleInterfaces';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
import { selectLocationState } from '../../redux/slices/locationSlice';
import { getAllLocationsAction } from '../../redux/actions/locationActions';



const InvMovFormComp = () => {

   // Estados globales para opciones
  const langState = useSelector(selectLangState);
  const messageState = useSelector(selectMessageState).message;
  const articleState = useSelector(selectArticleState).data;
  const locationState = useSelector(selectLocationState).data;
  const dispatch = useDispatch();
  
  const start = async () =>{
    await dispatch(getAllArticlesAction());
    await dispatch(getAllLocationsAction());
  }

 
  useEffect(()=>{
    start()
  },[]);
  
  console.log('selectArticlesState: ', selectArticleState)
  console.log('articleState: ',articleState);
  console.log('selectLangState: ', selectLangState)
  console.log('langState: ',langState);
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IArticleData>({
    name:'',
    description:'',
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<IArticleData>({
    name:'',
    description:'',
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.name !== '' &&
    formData.description !== ''
  ){
    submitOk = true;
  };
   
   // Expresiones de validación
  //  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  //  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
         setErrors((prevData) => ({
           ...prevData,
           [name]: '',
         }));
   }
 
   const emptyMessage = langState === 'es' ?
     'Este campo debe ser completado.' :
     'This field must be filled out.';
 
   const emptyValidationHandler =()=>{
     if(!formData.name){
       setErrors((prevData) => ({
         ...prevData,
         firstName: emptyMessage,
       }));
     };
     if(!formData.description){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
   
   };
   
   
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
         'http://localhost:5000/inventory-movement',
          formData
       );
       console.log('response', response.status);
       // queryResponse = await response.status;
      setFormData({
        name:'',
        description:'',
      })
 
       messageHandleClick()

     }catch(error:any){
       console.log(error.message)
     }
   }

   const addGenreHandler =(event:any)=>{
        
    const selArticle = event.target.value;

    console.log('selArticle: ', selArticle)

    // const selGenreName = event.target.options[event.target.selectedIndex].label;
    
    // if(!gameContent.genreIds.includes(selGenre)){
    //     setGameContent({...gameContent,genreIds:[...gameContent.genreIds,selGenre]})
    //     setErrorGenreIds('');
    //     const data = {id:selGenre, name:selGenreName}
    //     return dispatch(addIdNameGenre(data))
    // };
    
    // console.log('gameContent.genreIds al final dentro de genresHandler', gameContent.genreIds);
};

  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>
            Registrar movimiento en almacenes
          </h1>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='name'>
                {langState === 'es' ? 'Nombre' : 'Name'}
              </label>
              <select
                  className={styles.select}
                  id="articles"
                  name="articles"
                  // multiple
                  value={articleState}
                  onChange={addGenreHandler}
              >
                  {articleState.map((art:any) => (
                      <option
                      key={art.id}
                      value={art.id}
                  >
                      {art.name}
                  </option>
                  ))}
              </select>
              {
                errors.name 
                && 
                <p className={styles.errorMessage}>
                  {errors.name}
                </p>
              }
            </div>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='origin'>
                {langState === 'es' ? 'Locación de origen' : 'Origin location'}
              </label>
              <select
                  className={styles.select}
                  id="origin"
                  name="origin"
                  // multiple
                  value={locationState}
                  onChange={addGenreHandler}
              >
                  {locationState.map((loc:any) => (
                      <option
                      key={loc.id}
                      value={loc.id}
                  >
                      {loc.name}
                  </option>
                  ))}
              </select>
              {
                errors.description 
                && 
                <p className={styles.errorMessage}>
                  {errors.description}
                </p>
              }
            </div>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='destination'>
                {langState === 'es' ? 'Locación de destino' : 'Destination location'}
              </label>
              <select
                  className={styles.select}
                  id="destination"
                  name="destination"
                  // multiple
                  value={locationState}
                  onChange={addGenreHandler}
              >
                  {locationState.map((loc:any) => (
                      <option
                      key={loc.id}
                      value={loc.id}
                  >
                      {loc.name}
                  </option>
                  ))}
              </select>
              {
                errors.description 
                && 
                <p className={styles.errorMessage}>
                  {errors.description}
                </p>
              }
            </div>
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar formulario
          </button>
        </form>
      </div>
      { messageState && 
      <MessageComp
        data={ langState === 'es' ?
                'Mensaje enviado exitosamente' :
                'Message sent successfully'
              }
      />}
    </div>
  )
}

export default InvMovFormComp

