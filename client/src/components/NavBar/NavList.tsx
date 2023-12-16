import { NavLink } from "react-router-dom";
import './_NavList.modules.scss';

const NavList = () => {
  return (
    <ul className='navList'>
        <li>
          <NavLink to="/products" className='navLink' >Products</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className='navLink' >Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='navLink' >Log in</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='navLink' >Contact Us</NavLink>
        </li>
      </ul>
  )
}

export default NavList
