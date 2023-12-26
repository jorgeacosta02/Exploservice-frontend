import styles from './_EALogo.module.scss';
import EALogoImg from '../../EAAssets/EAImages/Exploagro-Logo-Brand.png'

const EALogo = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.EALogoImg}
        src={EALogoImg}
        alt="Logo Exploagro" />
    </div>
  )
}

export default EALogo
