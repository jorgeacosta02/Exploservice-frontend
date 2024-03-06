import styles from './_InvMovFormComp.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { IInvMovData } from '../../Interfaces/invMovInterfaces';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
import { selectLocationState } from '../../redux/slices/locationSlice';
import { getAllLocationsAction } from '../../redux/actions/locationActions';



const InquiryComp = () => {

   // Estados globales para opciones
  const langState = useSelector(selectLangState);
  const messageState = useSelector(selectMessageState).message;
  const articleState = useSelector(selectArticleState).data;
  const locationState = useSelector(selectLocationState).data;
  const dispatch = useDispatch();

  const movementTypes = ['entrada', 'salida', 'transferencia']
  
  const start = async () =>{
    await dispatch(getAllArticlesAction());
    await dispatch(getAllLocationsAction());
  }

 
  useEffect(()=>{
    start()
  },[]);
  
  // console.log('selectArticlesState: ', selectArticleState)
  // console.log('articleState: ',articleState);
  // console.log('selectLangState: ', selectLangState)
  // console.log('langState: ',langState);
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IInvMovData>({
    movementType: '',
    articleId: '',
    originLocationId: '',
    destinationLocationId: '',
    quantity: 0
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<IInvMovData>({
    movementType: '',
    articleId: '',
    originLocationId: '',
    destinationLocationId: '',
    quantity: 0
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.movementType !== '' &&
    formData.articleId !== '' &&
    formData.originLocationId !== '' &&
    formData.destinationLocationId !== '' &&
    formData.quantity !== 0
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
     if(!formData.movementType){
       setErrors((prevData) => ({
         ...prevData,
         movementType: emptyMessage,
       }));
     };
     if(!formData.articleId){
       setErrors((prevData) => ({
         ...prevData,
         articleId: emptyMessage,
       }));
     };
     if(!formData.originLocationId){
       setErrors((prevData) => ({
         ...prevData,
         originLocationId: emptyMessage,
       }));
     };
     if(!formData.destinationLocationId){
       setErrors((prevData) => ({
         ...prevData,
         destinationLocationId: emptyMessage,
       }));
     };
     if(formData.quantity <= 0){
       setErrors((prevData) => ({
         ...prevData,
         quantity: emptyMessage,
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
          movementType: '',
          articleId:'',
          originLocationId:'',
          destinationLocationId:'',
          quantity: 0
        })
        messageHandleClick()
     }catch(error:any){
       console.log(error.message)
     }
   }

   const addGenreHandler =(event:any)=>{
        
    const selArticle = event.target.value;

    console.log('selArticle: ', selArticle)

    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevData) => ({
      ...prevData,
      [name]: '',
    }));

    // const selGenreName = event.target.options[event.target.selectedIndex].label;
    
    // if(!gameContent.genreIds.includes(selGenre)){
    //     setGameContent({...gameContent,genreIds:[...gameContent.genreIds,selGenre]})
    //     setErrorGenreIds('');
    //     const data = {id:selGenre, name:selGenreName}
    //     return dispatch(addIdNameGenre(data))
    // };
    
    // console.log('gameContent.genreIds al final dentro de genresHandler', gameContent.genreIds);
  };

  console.log('formData :', formData)
  console.log('errors :', errors)

  
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
              htmlFor='movementType'>
              {langState === 'es' ? 'Tipo de movimiento' : 'Movement type'}
            </label>
            <select
                className={styles.select}
                id="movementType"
                name="movementType"
                // multiple
                value={formData.movementType}
                onChange={addGenreHandler}
            >
              <option value="" disabled selected>
                Seleccionar un tipo de movimiento
              </option>
              {movementTypes.map((mov:any) => (
                  <option
                  key={mov}
                  value={mov}
              >
                  {mov}
              </option>
              ))}
            </select>
            {
              errors.movementType 
              && 
              <p className={styles.errorMessage}>
                {errors.movementType}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='articleId'>
              {langState === 'es' ? 'Nombre' : 'Name'}
            </label>
            <select
                className={styles.select}
                id="articleId"
                name="articleId"
                // multiple
                value={formData.articleId}
                onChange={addGenreHandler}
            >
              <option value="" disabled selected>
                Seleccionar un artículo
              </option>
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
              errors.articleId 
              && 
              <p className={styles.errorMessage}>
                {errors.articleId}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='originLocationId'>
              {langState === 'es' ? 'Locación de origen' : 'Origin location'}
            </label>
            <select
                className={styles.select}
                id="originLocationId"
                name="originLocationId"
                // multiple
                value={formData.originLocationId}
                onChange={addGenreHandler}
            >
              <option value="" disabled selected>
                Seleccionar una ubicación
              </option>
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
              errors.originLocationId 
              && 
              <p className={styles.errorMessage}>
                {errors.originLocationId}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
              <label 
                htmlFor='destinationLocationId'>
                {langState === 'es' ? 'Locación de destino' : 'Destination location'}
              </label>
              <select
                  className={styles.select}
                  id="destinationLocationId"
                  name="destinationLocationId"
                  // multiple
                  value={formData.destinationLocationId}
                  onChange={addGenreHandler}
              >
                <option value="" disabled selected>
                  Seleccionar una ubicación
                </option>
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
                errors.destinationLocationId 
                && 
                <p className={styles.errorMessage}>
                  {errors.destinationLocationId}
                </p>
              }
            </div>
            <div className={styles.inputBlock}>
              <label 
                htmlFor='quantity'>
                {langState === 'es' ? 'Cantidad' : 'Quantity'}
              </label>
              <input
                type='number'
                id='quantity'
                name='quantity' 
                value={formData.quantity}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese cantidad...' :  'Enter quantity...'}
                // className={inputColor}
              />
              {
                errors.quantity 
                && 
                <p className={styles.errorMessage}>
                  {errors.quantity}
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
        data={
          langState === 'es' ?
            'Mensaje enviado exitosamente' :
            'Message sent successfully'
        }
      />}
    </div>
  )
}

export default InquiryComp
