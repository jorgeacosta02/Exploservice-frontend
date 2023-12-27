import styles from './_ESServicesComp.module.scss'
import prodcuctionImg01 from '../../ESAssets/ESImages/perfoProd01.png'
import prodcuctionImg02 from '../../ESAssets/ESImages/perfoProd02.jpg'

const ESServicesComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.tile}>
          PERFORACION PARA PRODUCCION
        </h1>
        <p>
        Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.
        </p>
        <div className={styles.imgContainer}>
          <img src={prodcuctionImg01} alt="Procuction Img 01" />
          <img src={prodcuctionImg02} alt="Procuction Img 01" />
        </div>
      </div>
    </div>
  )
}

export default ESServicesComp
