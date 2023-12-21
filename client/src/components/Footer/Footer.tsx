import styles from './_Footer.module.scss';
import exploservice01 from '../../assets/images/exploservice01.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ExploAgro de Exploservice &copy; | Todos los derechos reservados | Diseño Web Jorge Acosta
      </p>
    </div>
  )
}

export default Footer
