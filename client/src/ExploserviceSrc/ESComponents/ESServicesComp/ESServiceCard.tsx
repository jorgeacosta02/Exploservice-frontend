import styles from './_ESServiceCard.module.scss'




const ESServicesComp = (props: any) => {

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.tile}>
          {props.title}
        </h1>
        <p>
          {props.description}
        </p>
        <div className={styles.imgContainer}>
          {/* {props.images.map(img =>  */}
            
          
        
          
        </div>
      </div>
    </div>
  )
}

export default ESServicesComp
