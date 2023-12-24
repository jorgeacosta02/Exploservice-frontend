import React from "react"
import EALogo from "../../../components/EAComponents/EANavBarLogo/EALogo";
import EANavList from "../../../components/EAComponents/EANavBarNavList/EANavList";
import EAMenu from "../../../components/EAComponents/EANavBarMenu/EAMenu";
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

