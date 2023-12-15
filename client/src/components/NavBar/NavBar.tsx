import React from "react"
import { NavLink } from "react-router-dom"
import styles from './_NavBar.module.scss';


const NavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <h1>ExploAgro</h1>
      <ul className={styles.navlist}>
        <li>
          <NavLink to="/products" className={styles.navBar} >Products</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={styles.navBar} >Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.navBar} >Log in</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navBar} >Contact Us</NavLink>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        style={{ fill: 'rgba(255, 255, 255, 1)' }}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default NavBar

