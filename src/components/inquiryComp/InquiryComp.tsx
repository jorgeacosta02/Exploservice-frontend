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
import { selectLocationState } from '../../redux/slices/locationSlice';



const InquiryComp = () => {

  const langState = useSelector(selectLangState).lang
  const locationState = useSelector(selectLocationState).data
  const articleState = useSelector(selectArticleState).data
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    article:'',
    group1:'',
    group2:'',
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
 
  const handleChange =(event:any)=>{
    const { name, value } = event.target;
    setOptions((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Obtener una lista de nombres únicos de los artículos
  const uniqueArticleNames: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.name)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueGroup1Names: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.group1)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueGroup2Names: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.group2)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueBrandNames: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.brand)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueLocationNames: any[] = Array.from(new Set<IArticleFormDB>(locationState.map((art:any) => art.name)));
  

  console.log('options: ', options)
  console.log('inquiryState: ', inquiryState);
  console.log('articleState: ', articleState);
  console.log('locationState: ', locationState)
  console.log('uniqueArticleNames: ', uniqueArticleNames)
  console.log('uniqueGroup1Names: ', uniqueGroup1Names)
  console.log('uniqueGroup2Names: ', uniqueGroup2Names)
  console.log('uniqueBrandNames: ', uniqueBrandNames)
  console.log('uniqueLocationNames: ', uniqueLocationNames)


  const cleanFiltersHandler = () => {
    setOptions({
      article:'',
      group1:'',
      group2:'',
      brand:'',
      location:'',
      quantity:''
    })
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>
          Consultas
        </h3>
        <div className={styles.form}>
          <button
            className={styles.cleanFilters}
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
              {uniqueGroup1Names.map((name, index) => (
                <option key={index} value={name}>
                  {name}
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
              {uniqueGroup2Names.map((name, index) => (
                <option key={index} value={name}>
                  {name}
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
              {uniqueBrandNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.selectBlock}>
            <label 
              htmlFor='location'>
              {langState === 'es' ? 'Locación' : 'Location'}
            </label>
            <select
              className={styles.select}
              id="location"
              name="location"
              value={options.location}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Seleccionar Locación
              </option>
              {uniqueLocationNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.logsContainer}>
          {
            inquiryState
            .filter((inq:any) => 
            (!options.article || inq.article.name === options.article) && 
            (!options.group1 || inq.article.group1 === options.group1) && 
            (!options.group2 || inq.article.group1 === options.group2) && 
            (!options.brand || inq.article.brand === options.brand) && 
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
        </div>
        <div className={styles.linksContainer}>
          <Link
            to='/inventory-movement'
            className={styles.link}
          >
            Movimientos
          </Link>
          <Link
            to='/intranet'
            className={styles.link}
          >
            Intranet
          </Link>
          <Link
            to='/company'
            className={styles.link}
          >
            Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InquiryComp

