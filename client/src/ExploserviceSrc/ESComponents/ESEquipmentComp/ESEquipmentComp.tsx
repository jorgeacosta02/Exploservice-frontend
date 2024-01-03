import styles from './_ESEquipmentComp.module.scss'
import frd from '../../ESAssets/ESImages/ESEquipment/frd1200-01.png'
import atlas from '../../ESAssets/ESImages/ESEquipment/atlas-f9-01.png'
import tamrock from '../../ESAssets/ESImages/ESEquipment/tamrock01.png'

const ESEquipmentComp = () => {
  return (
    <div className={styles.container}>
      <h1>Nuestros equipos</h1>
      <div className={styles.secondContainer}>
        <div className={styles.equipmentContainer}>
          <img src={frd} alt="FRD-image" />
          <div className={styles.types}>
            <p>1 x Furukawa HCR 1200 ED</p>
            <p>5 x Furukawa HCR 1200 EDII</p>
            <p>2 x Furukawa HCR 1500 EDII</p>
          </div>
        </div>
        <div className={styles.equipmentContainer}>
          <img src={atlas} alt="FRD-image" />
          <div className={styles.types}>
            <p>1 x Atlas Copci Roc F9</p>
            <p>1 x Atlas Copco Roc L8 25</p>
          </div>
        </div>
        <div className={styles.equipmentContainer}>
          <img src={tamrock} alt="Tamrock-image" />
          <div className={styles.types}>
            <p>2 x Tamrock Ranger 800-2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ESEquipmentComp
