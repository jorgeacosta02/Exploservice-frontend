import styles from './_IntranetComp.module.scss'
import { NavLink } from 'react-router-dom'

const IntranetComp = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.mainTitle}>
            Intranet
        </h1>
        <div className={styles.dataContainer}>
            <h3 className={styles.blockTitle}>
                Generar formulario de:
            </h3>
            <ul className={styles.linksContainer}>
                <li>
                    <NavLink 
                        to='/article-up-form'
                        className={styles.link}
                    >
                        Alta de artículo en almacenes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='#'
                        className={styles.link}
                    >
                        Movimiento en almacenes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='#'
                        className={styles.link}
                    >
                        Parte diario de obra
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='#'
                        className={styles.link}
                    >
                        Reparación de veículos y equips
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='#'
                        className={styles.link}
                    >
                        Mantenimiento de instalaciones
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default IntranetComp
