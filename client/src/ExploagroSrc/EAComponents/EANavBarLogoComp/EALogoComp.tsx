import styles from './_EALogoComp.module.scss';
import EALogoImg from '../../EAAssets/EAImages/EA-Logo-Brand/Exploagro-Logo-Brand.png'

const EALogoComp = () => {
  return (
      <img
        className={styles.EALogoImg}
        src={EALogoImg}
        alt="Logo Exploagro"
      />
  )
}

export default EALogoComp
