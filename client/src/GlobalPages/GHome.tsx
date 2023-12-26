import styles from './_GHome.module.scss'
import ESLogoBrand from '../ExploserviceSrc/ESAssets/ESImages/Exploservice-Logo-Brand.png'
import EALogo from '../ExploagroSrc/EAAssets/EAImages/Exploagro-Logo-Brand.png'
import ADLLogo from '../ExploserviceSrc/ESAssets/ESImages/ADLLogo.png'
import { NavLink } from 'react-router-dom'

const GHome = () => {
  return (
    <div>
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

export default GHome

