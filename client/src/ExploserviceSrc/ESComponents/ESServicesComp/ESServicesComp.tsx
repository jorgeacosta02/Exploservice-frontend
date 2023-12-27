import styles from './_ESServicesComp.module.scss'
import prodcuctionImg01 from '../../ESAssets/ESImages/perfoProd01.png'

const ESServicesComp = () => {
  return (
    <div>
      <h1 className={styles.container}>
        PERFORACION PARA PRODUCCION
      </h1>
      <p>
      Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.
      </p>
      <div className={styles.imgContainer}>
        <img src={prodcuctionImg01} alt="Procuction Img 01" />
      </div>
    </div>
  )
}

export default ESServicesComp
