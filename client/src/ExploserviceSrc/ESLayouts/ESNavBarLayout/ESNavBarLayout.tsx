import React from "react"
import ESLogoComp from "../../../components/navBarLogoComp/logoComp";
import ESNavListComp from "../../../components/navBarNavListComp/navListComp";
import ESMenuComp from "../../../components/navBarMenuComp/menuComp";
import styles from './_ESNavBarLayout.module.scss';


const ESNavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <ESLogoComp/>
      <ESMenuComp/>
      <ESNavListComp/>
    </div>
  )
}

export default ESNavBarLayout

