import React from "react"
import NavBarLogoComp from "../../components/navBarLogoComp/logoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/navBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/navBarMenuComp";
import styles from './_ESNavBarLayout.module.scss';


const NavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <NavBarLogoComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

