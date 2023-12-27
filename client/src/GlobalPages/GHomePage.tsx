import styles from './_GHomePage.module.scss'
import ESLogoBrand from '../ExploserviceSrc/ESAssets/ESImages/ES-Logos-Brands/Exploservice-Logo-Brand.png'
import ADLLogo from '../ExploserviceSrc/ESAssets/ESImages/ES-Logos-Brands/ADLLogo.png'
import EALogo from '../ExploagroSrc/EAAssets/EAImages/EA-Logo-Brand/Exploagro-Logo-Brand.png'
import { NavLink } from 'react-router-dom'

const GHomePage = () => {
  return (
    <div>
      <NavLink to='/exploservice/company' className={styles.EScontainer}>
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

export default GHomePage

