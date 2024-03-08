import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectLangState } from '../../redux/slices/langSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';


const InquiryComp = () => {

   // Estados globales para opciones
  // const langState = useSelector(selectLangState);
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    article:'Barra de perforación',
    feature1:'T38',
    feature2:'',
    brand:'',
    location:'Tocota',
    quantity:''
  })

  // let filterOptions = {
  //   article: options.article &&
  // }

  const start = async () =>{
    await dispatch(getAllInquiriesAction());
  }

  useEffect(()=>{
    start()
  },[]);
  
  console.log('inquiryState: ', inquiryState);
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          Consultas
        </h1>
        {
          inquiryState
          .filter((inq:any) => 
          (!options.article || inq.article.name === options.article) && 
          (!options.feature1 || inq.article.feature1 === options.feature1) && 
          (!options.feature2 || inq.article.feature1 === options.feature2) && 
          (!options.brand || inq.article.brand === options.brand) && 
          (!options.location || inq.location.name === options.location)
        )
            .map((inq:any) => (
              <div key={inq.id}>
                <InqSingleComp
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

