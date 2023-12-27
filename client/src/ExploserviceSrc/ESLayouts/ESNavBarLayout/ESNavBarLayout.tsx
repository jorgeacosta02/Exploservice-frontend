import React from "react"
import ESLogoComp from "../../ESComponents/ESNavBarLogoComp/ESLogoComp";
import ESNavListComp from "../../ESComponents/ESNavBarNavListComp/ESNavListComp";
import ESMenuComp from "../../ESComponents/ESNavBarMenuComp/ESMenuComp";
import styles from './_ESNavBarLayout.module.scss';


const EANavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <ESLogoComp/>
      <ESMenuComp/>
      <ESNavListComp/>
    </div>
  )
}

export default EANavBarLayout

