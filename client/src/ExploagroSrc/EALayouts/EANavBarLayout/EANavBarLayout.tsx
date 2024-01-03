import React from "react"
import EALogoComp from "../../EAComponents/EANavBarLogoComp/EALogoComp";
import EANavListComp from "../../EAComponents/EANavBarNavListComp/EANavListComp";
import EAMenuComp from "../../EAComponents/EANavBarMenuComp/EAMenuComp";
import styles from './_EANavBarLayout.module.scss';


const EANavBarLayout: React.FC = () => {

  return (
    <div className={styles.navBar}>
      <EALogoComp/>
      <EAMenuComp/>
      <EANavListComp/>
    </div>
  )
}

export default EANavBarLayout

