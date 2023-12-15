import React from "react"
import { NavLink } from "react-router-dom"
import styles from './_NavBar.module.scss';


const NavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  )
}

export default NavBar

