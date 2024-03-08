import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectLangState } from '../../redux/slices/langSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
import { selectLocationState } from '../../redux/slices/locationSlice';
import { getAllLocationsAction } from '../../redux/actions/locationActions';
import { selectLangState } from '../../redux/slices/langSlice';


const InquiryComp = () => {

  const langState = useSelector(selectLangState).lang
  const articleState = useSelector(selectArticleState).data
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    article:'',
    feature1:'',
    feature2:'',
    brand:'',
    location:'Central',
    quantity:''
  })

  const start = async () =>{
    await dispatch(getAllInquiriesAction());
    await dispatch(getAllArticlesAction());
    await dispatch(getAllLocationsAction());
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
        <div>
        <div className={styles.inputBlock}>
            <label 
              htmlFor='articleId'>
              {langState === 'es' ? 'Nombre' : 'Name'}
            </label>
            <select
                className={styles.select}
                id="articleId"
                name="articleId"
                // value={formData.articleId}
                // onChange={addGenreHandler}
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
          </div>
        </div>
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

