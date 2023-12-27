import styles from './_EALogo.module.scss';
import EALogoImg from '../../EAAssets/EAImages/EA-Logo-Brand/Exploagro-Logo-Brand.png'

const EALogo = () => {
  return (
      <img
        className={styles.EALogoImg}
        src={EALogoImg}
        alt="Logo Exploagro"
      />
  )
}

export default EALogo
