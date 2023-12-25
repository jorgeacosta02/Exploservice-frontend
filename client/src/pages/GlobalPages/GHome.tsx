import styles from './_GHome.module.scss'
import ESLogo from '../../assets/images/ESImages/ESLogo.png'
import ESBrand from '../../assets/images/ESImages/ESBrand.png'
import ADLLogo from '../../assets/images/ESImages/ADLLogo.png'
import { NavLink } from 'react-router-dom'

const GHome = () => {
  return (
    <div>
      <NavLink to='/exploservice'>
        <div className={styles.container}>
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
        </div>
      </NavLink>
      <NavLink to='/exploagro'>
        <h1 className="exploagro">
          ExploAgro
        </h1>
      </NavLink>
    </div>
  )
}

export default GHome

