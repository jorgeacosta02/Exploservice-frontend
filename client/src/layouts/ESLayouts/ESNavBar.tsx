import React from "react"
import ESLogo from "../../../components/EAComponents/EANavBarLogo/EALogo";
import ESNavList from "../../../components/EAComponents/EANavBarNavList/EANavList";
import ESMenu from "../../../components/EAComponents/EANavBarMenu/EAMenu";
import styles from './_EANavBar.module.scss';


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

