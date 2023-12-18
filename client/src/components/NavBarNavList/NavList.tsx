import { NavLink } from "react-router-dom";
import styles from './_NavList.module.scss';

const NavList = () => {
  return (
    <ul className={styles.navList}>
        <li>
          <NavLink to="/home" className={styles.navLink} >Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={styles.navLink} >Productos</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={styles.navLink} >Empresa</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={styles.navLink} >Registrarse</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.navLink} >Ingresar</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navLink} >Contactanos</NavLink>
        </li>
      </ul>
  )
}

export default NavList
