import React from "react"
import EALogo from "../../EAComponents/EANavBarLogo/EALogo";
import EANavList from "../../EAComponents/EANavBarNavList/EANavList";
import EAMenu from "../../EAComponents/EANavBarMenu/EAMenu";
import styles from './_EANavBar.module.scss';


const EANavBar: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <EALogo/>
      <EAMenu/>
      <EANavList/>
    </div>
  )
}

export default EANavBar

