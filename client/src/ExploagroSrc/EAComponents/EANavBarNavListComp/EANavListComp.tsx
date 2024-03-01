import { NavLink } from "react-router-dom";
import styles from './_EANavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { falseMenu, selectMenuState } from "../../../redux/slices/menuSlice";


const EANavListComp = () => {

  const menuState = useSelector(selectMenuState).menu;

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch(falseMenu() );
  };

  const navListStyles = `${styles.navList} ${menuState ? styles.show : ''}`;

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
            to="/exploagro" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/exploagro/product" 
            className={styles.navLink} 
           >Producto</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/exploagro/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>
      </ul>
  )
}

export default EANavListComp
