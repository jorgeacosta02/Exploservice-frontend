import { NavLink } from "react-router-dom";
import styles from './_NavList.module.scss';
import { RootState } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { toggleStyle } from "../../redux/actions/actions";

const NavList = () => {

  const stylesReducer = useSelector((state: RootState) => state.styles);

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch(toggleStyle() );
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
        <li onClick={handleClick} >
          <NavLink
            to="/product" 
            className={styles.navLink} 
           >Producto</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Registrarse</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Ingresar</NavLink>
        </li>
        <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Contactanos</NavLink>
        </li>
      </ul>
  )
}

export default NavList
