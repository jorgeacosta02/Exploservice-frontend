import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectLangState } from '../../redux/slices/langSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
import { IArticleFormDB } from '../../Interfaces/articleInterfaces';
import { getAllLocationsAction } from '../../redux/actions/locationActions';
import { selectLangState } from '../../redux/slices/langSlice';
import { Link } from 'react-router-dom';



const InquiryComp = () => {

  const langState = useSelector(selectLangState).lang
  const articleState = useSelector(selectArticleState).data
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    article:'',
    brand:'',
    group1:'',
    group2:'',
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
 
  const handleChange =(event:any)=>{
    const { name, value } = event.target;
    setOptions((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Obtener una lista de nombres únicos de los artículos
  const uniqueArticleNames: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.name)));
  
  //Array filtrado por article para mostrar options de feature1
  let brandOptions = articleState.filter((art:any) => (!options.article || art.name === options.article))

  //Array filtrado por article para mostrar options de feature1
  let group1Options = articleState.filter((art:any) => (!options.article || art.group1 === options.group1))
  
  // let brandOptions: any[] = [];
  // let uniqueNames = new Set();
  
  // articleState.forEach((art:any) => {
  //   if ((!options.article || art.name === options.article) && !uniqueNames.has(art.name)) {
  //     brandOptions.push(art);
  //     uniqueNames.add(art.name);
  //   }
  // });
      
  // let brands: any[] =  Array.from(uniqueNames)

  // console.log('brands: ', brands)
  console.log('inquiryState: ', inquiryState);
  console.log('articleState: ', articleState)
  console.log('uniqueArticleNames: ', uniqueArticleNames)
  console.log('brandOptions: ', brandOptions);

  const cleanFiltersHandler = () => {
    setOptions({
      article:'',
      brand:'',
      group1:'',
      group2:'',
      location:'',
      quantity:''
    })
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Consultas
      </h1>
      <div className={styles.selectGroup}>
        <button
          onClick={cleanFiltersHandler}
        >
          Limpiar filtros
        </button>
        <div className={styles.selectBlock}>
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
            {uniqueArticleNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectBlock}>
          <label 
            htmlFor='group1'>
            {langState === 'es' ? 'Grupo 1' : 'Group 1'}
          </label>
          <select
            className={styles.select}
            id="group1"
            name="group1"
            value={options.group1}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Seleccionar Grupo 
            </option>
            {brandOptions.map((art:any) => (
              <option
                key={art.id}
                value={art.group1}
              >
                {art.group1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectBlock}>
          <label 
            htmlFor='group2'>
            {langState === 'es' ? 'Grupo 2' : 'Group 2'}
          </label>
          <select
            className={styles.select}
            id="group2"
            name="group2"
            value={options.group2}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Seleccionar Grupo 
            </option>
            {brandOptions.map((art:any) => (
              <option
                key={art.id}
                value={art.group2}
              >
                {art.group2}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectBlock}>
          <label 
            htmlFor='brand'>
            {langState === 'es' ? 'Marca' : 'Brand'}
          </label>
          <select
            className={styles.select}
            id="brand"
            name="brand"
            value={options.brand}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Seleccionar Marca
            </option>
            {brandOptions.map((art:any) => (
              <option
                key={art.id}
                value={art.brand}
              >
                {art.brand}
              </option>
            ))}
          </select>
        </div>
      </div>
      {
        inquiryState
        .filter((inq:any) => 
        (!options.article || inq.article.name === options.article) && 
        (!options.brand || inq.article.brand === options.brand) && 
        (!options.group1 || inq.article.group1 === options.group1) && 
        (!options.group2 || inq.article.group1 === options.group2) && 
        (!options.location || inq.location.name === options.location)
      )
        .map((inq:any) => (
          <div key={inq.id}>
            <InqSingleComp
              article={inq.article.name}
              brand={inq.article.brand}
              group1={inq.article.group1}
              group2={inq.article.group2}
              location={inq.location.name}
              quantity={inq.amount}
            />
          </div>
        ))
      }
      <Link to='/inventory-movement'>Inventory Movemente</Link>
    </div>
  )
}

export default InquiryComp

