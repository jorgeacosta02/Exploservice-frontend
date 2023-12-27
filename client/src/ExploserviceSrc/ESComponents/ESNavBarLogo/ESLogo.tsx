import styles from './_ESLogo.module.scss';
import ESLogoImg from '../../ESAssets/ESImages/Exploservice-Logo-Brand.png';
import ADLLogo from '../../ESAssets/ESImages/ADLLogo.png';

const ESLogo = () => {
  return (
    <div className={styles.container}>
      <img
        src={ESLogoImg}
        alt="Exploservice Logo"
        className={styles.ESLogoImg}  
      />
      <img
        src={ADLLogo}
        alt="Exploservice Logo"
        className={styles.ADLLogo}  
      />
    </div>
  )
}

export default ESLogo
