import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
// import MessageComp from '../messageComp/MessageComp';
import { IInvMovData } from '../../Interfaces/invMovInterfaces';
import { selectLangState } from '../../redux/slices/langSlice';
import { 
  // selectMessageState, 
  toggleMessage } from '../../redux/slices/messageSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';


const InquiryComp = () => {

   // Estados globales para opciones
  const langState = useSelector(selectLangState);
  // const messageState = useSelector(selectMessageState).message;
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  // const movementTypes = ['entrada', 'salida', 'transferencia']
  
  const start = async () =>{
    await dispatch(getAllInquiriesAction());
  }

 
  useEffect(()=>{
    start()
  },[]);
  
  console.log('inquiryState: ', inquiryState);
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
         'http://localhost:5000/inventory',
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

  // console.log('formData :', formData)
  // console.log('errors :', errors)

  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          Consultas
        </h1>
        {/* <p>{inquiryState[0]?.article?.brand}</p> */}
        {
          inquiryState.map((inq:any) => (
            <div>
              {/* <p>Uno</p> */}
              <InqSingleComp
                key={inq.id}
                article={inq.article.name}
                feature1={inq.article.feature1}
                feature2={inq.article.feature2}
                brand={inq.article.brand}
                location={inq.location.name}
                quantity={inq.amount}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default InquiryComp

