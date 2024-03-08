import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectLangState } from '../../redux/slices/langSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
// import { selectLocationState } from '../../redux/slices/locationSlice';
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
    location:'',
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

  const handleChange =(event:any)=>{
    const { name, value } = event.target;
    setOptions((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Array filtrado por article para mostrar options de feature1
  let feature1Options = articleState
                .filter((art:any) => 
                  (!options.article || art.name === options.article)
                )
  console.log('feature1Options: ', feature1Options);
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          Consultas
        </h1>
        <div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='article'>
              {langState === 'es' ? 'Artículo' : 'Article'}
            </label>
            <select
                className={styles.select}
                id="article"
                name="article"
                value={options.article}
                onChange={handleChange}
            >
              <option value="" disabled selected>
                Seleccionar un artículo
              </option>
              {articleState.map((art:any) => (
                  <option
                  key={art.id}
                  value={art.name}
              >
                  {art.name}
              </option>
              ))}
            </select>
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='feature1'>
              {langState === 'es' ? 'Caract 1' : 'Feature 1'}
            </label>
            <select
                className={styles.select}
                id="feature1"
                name="feature1"
                value={options.feature1}
                onChange={handleChange}
            >
              <option value="" disabled selected>
                Seleccionar característica 1
              </option>
              {feature1Options.map((art:any) => (
                    <option
                    key={art.id}
                    value={art.feature1}
              >
                  {art.feature1}
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

