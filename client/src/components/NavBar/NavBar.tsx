import React from "react"
import { NavLink } from "react-router-dom"
import styles from './_NavBar.module.scss';


const NavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <NavLink to="/products" className={styles.navBar} >Products</NavLink>
      <NavLink to="/signup" className={styles.navBar} >Sign Up</NavLink>
      <NavLink to="/login" className={styles.navBar} >Log in</NavLink>
      <NavLink to="/contact" className={styles.navBar} >Contact Us</NavLink>
    </div>
  )
}

export default NavBar

