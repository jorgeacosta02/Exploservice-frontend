import styles from './_ESLogo.module.scss';
import ESLogoImg from '../../ESAssets/ESImages/Exploservice-Logo-Brand.png';

const ESLogo = () => {
  return (
    <img
      src={ESLogoImg}
      alt="Exploservice Logo"
      className={styles.ESLogo}  
    />
  )
}

export default ESLogo
