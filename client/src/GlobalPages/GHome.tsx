import styles from './_GHome.module.scss'
import ESLogo from '../ExploserviceSrc/ESAssets/ESImages/ESLogo.png'
import ESBrand from '../ExploserviceSrc/ESAssets/ESImages/ESBrand.png'
import ADLLogo from '../ExploserviceSrc/ESAssets/ESImages/ADLLogo.png'
import { NavLink } from 'react-router-dom'

const GHome = () => {
  return (
    <div>
      <NavLink to='/exploservice' className={styles.container}>
        <div className={styles.exploservice}>
          <img
              className={styles.eslogo}
              src={ESLogo} alt="Field" />
          <img
              className={styles.eslogo}
              src={ESBrand} alt="Field" />
        </div>
        <div className={styles.adl}>
          <img
              className={styles.eslogo}
              src={ADLLogo} alt="Field" />
        </div>
      </NavLink>
      <div className={styles.exploagro}>
        <NavLink to='/exploagro' className={styles.navLink}>
          <div className={styles.eacontainer}>
            <p>EXPLO</p>
            <p>AGRO</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default GHome

