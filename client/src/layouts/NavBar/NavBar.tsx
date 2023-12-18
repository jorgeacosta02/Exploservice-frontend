import React from "react"
import Logo from "../../components/NavBarLogo/Logo";
import NavList from "../../components/NavBarNavList/NavList";
import Menu from "../../components/NavBarMenu/Menu";
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

