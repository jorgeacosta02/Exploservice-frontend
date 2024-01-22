import styles from './_ESLogoComp.module.scss';
import ESLogoImg from '../../ESAssets/ESImages/ES-Logos-Brands/Exploservice-Logo-Brand.png';
import ADLLogo from '../../ESAssets/ESImages/ES-Logos-Brands/ADLLogo.png';

const ESLogoComp = () => {
  return (
    <div className={styles.container}>
      <img
        src={ESLogoImg}
        alt="Exploservice Logo"
        className={styles.ESLogoImg}  
      />
      <img
        src={ADLLogo}
        alt="ADL Logo"
        className={styles.ADLLogo}  
      />
    </div>
  )
}

export default ESLogoComp
