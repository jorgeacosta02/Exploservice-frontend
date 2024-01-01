import styles from './_ESEquipmentComp.module.scss'
import frd from '../../ESAssets/ESImages/ESEquipment/frd1200-01.png'
import atlas from '../../ESAssets/ESImages/ESEquipment/atlas-f9-01.png'
import tamrock from '../../ESAssets/ESImages/ESEquipment/tamrock01.png'

const ESEquipmentComp = () => {
  return (
    <div className={styles.container}>
      <h1>Nuestros equipos</h1>
      <div className={styles.secContainer}>
        <div className={styles.equipmentContainer}>
          <img src={frd} alt="FRD-image" />
          <div className={styles.types}>
            <h3>1 x Furukawa HCR 1200 ED</h3>
            <h3>5 x Furukawa HCR 1200 EDII</h3>
            <h3>2 x Furukawa HCR 1500 EDII</h3>
          </div>
        </div>
        <div className={styles.equipmentContainer}>
          <img src={atlas} alt="FRD-image" />
          <div className={styles.types}>
            <h3>1 x Atlas Copci Roc F9</h3>
            <h3>1 x Atlas Copco Roc L8 25</h3>
          </div>
        </div>
        <div className={styles.equipmentContainer}>
          <img src={tamrock} alt="Tamrock-image" />
          <div className={styles.types}>
            <h3>2 x Tamrock Ranger 800-2</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ESEquipmentComp
