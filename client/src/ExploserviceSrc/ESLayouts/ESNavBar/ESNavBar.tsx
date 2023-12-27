import React from "react"
import ESLogo from "../../ESComponents/ESNavBarLogo/ESLogo";
import ESNavList from "../../ESComponents/ESNavBarNavList/ESNavList";
import ESMenu from "../../ESComponents/ESNavBarMenu/ESMenu";
import styles from './_ESNavBar.module.scss';


const EANavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <ESLogo/>
      <ESMenu/>
      <ESNavList/>
    </div>
  )
}

export default EANavBar

