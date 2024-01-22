import { NavLink } from "react-router-dom";
import styles from './_navBarNavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { falseStyle } from "../../redux/actions";

const NavBarNavListComp = () => {

  const stylesReducer = useSelector((state: RootState) => state.styles.styles);

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch(falseStyle() );
  };

  const navListStyles = `${styles.navList} ${stylesReducer ? styles.show : ''}`;

  return (
    <ul className={navListStyles} >
        <li onClick={handleClick} >
          <NavLink
            to="/" 
            className={styles.navLink} 
           >Inicio</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/company" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/services" 
            className={styles.navLink} 
           >Servicios</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/equipment" 
            className={styles.navLink} 
           >Equipos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/jobs" 
            className={styles.navLink} 
           >Trabajos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>
      </ul>
  )
}

export default NavBarNavListComp
