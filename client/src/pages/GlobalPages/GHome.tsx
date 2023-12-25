import styles from './_GHome.module.scss'
import ESLogo from '../../assets/images/ESImages/ESLogo.png'
import ESBrand from '../../assets/images/ESImages/ESBrand.png'
import ADLLogo from '../../assets/images/ESImages/ADLLogo.png'
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
  
      <NavLink to='/exploagro' className={styles.exploagro}>
        Exploagro
      </NavLink>
    </div>
  )
}

export default GHome

