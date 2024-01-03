import styles from './_Landing.module.scss'
import { NavLink } from 'react-router-dom'
import ESLogoBrand from '../ExploserviceSrc/ESAssets/ESImages/ES-Logos-Brands/Exploservice-Logo-Brand.png'
import ADLLogo from '../ExploserviceSrc/ESAssets/ESImages/ES-Logos-Brands/ADLLogo2.png'
import EALogo from '../ExploagroSrc/EAAssets/EAImages/EA-Logo-Brand/Exploagro-Logo-Brand.png'

const LandingPage = () => {
  return (
    <div>
      <div className={styles.esadlbg}></div>
      <div className={styles.esadllinkContainer}>
        <NavLink to='/exploservice' className={styles.EScontainer}>
          <img
            src={ESLogoBrand}
            alt="Exploservice Logo"
            className={styles.ESlogobrand}
            />
          <img
            src={ADLLogo}
            alt="ADL Logo"
            className={styles.ADLLogo}
            />
        </NavLink>
      </div>
      <div className={styles.eabg}></div>
      <NavLink to='/exploagro' className={styles.EAcontainer}>
          <img
            src={EALogo}
            alt="Exploagro Logo"
            className={styles.EAlogobrand}
          />
       </NavLink>
    </div>
  )
}

export default LandingPage

