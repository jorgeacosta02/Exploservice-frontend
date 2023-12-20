import { NavLink } from "react-router-dom";
import styles from './_NavList.module.scss';
import { RootState } from "../../redux/types";
import { useSelector } from "react-redux";

const NavList = () => {

  const stylesReducer = useSelector((state: RootState) => state.styles);

  const navListStyles = `${styles.navList} ${stylesReducer ? styles.show : ''}`;

  return (
    <ul className={navListStyles}>
        <li className={styles.navLink}>
          <NavLink to="/home" className={styles.link} >Inicio</NavLink>
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
