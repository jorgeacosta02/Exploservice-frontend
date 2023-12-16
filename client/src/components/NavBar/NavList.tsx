import { NavLink } from "react-router-dom";
import './_NavList.modules.scss';

const NavList = () => {
  return (
    <ul className='navList'>
        <li>
          <NavLink to="/products" className='navLink' >Productos</NavLink>
        </li>
        <li>
          <NavLink to="/products" className='navLink' >Empresa</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className='navLink' >Registrarse</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='navLink' >Ingresar</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='navLink' >Contactanos</NavLink>
        </li>
      </ul>
  )
}

export default NavList
