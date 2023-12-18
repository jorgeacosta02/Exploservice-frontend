import React from "react"
import Logo from "./Logo";
import NavList from "./NavList";
import Menu from "./Menu";
import styles from './_NavBar.module.scss';


const NavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <Logo/>
      <NavList/>
      <Menu/>
    </div>
  )
}

export default NavBar

