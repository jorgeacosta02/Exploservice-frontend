import EANavBarLayout from "../../EALayouts/EANavBarLayout/EANavBarLayout.tsx";
import EAHomeImg from "../../EAComponents/EAHomeImg/EAHomeImg.tsx";
import EAHomeText from "../../EAComponents/EAHomeText/EAHomeText.tsx";
import EAHomeComp from "../../EAComponents/EAHomeComp/EAHomeComp..tsx";
import EAFooterComp from "../../EAComponents/EAFooterComp/EAFooterComp.tsx";

const EAHomePage = () => {
  return (
    <div>
      <EANavBarLayout />
      <EAHomeImg />
      <EAHomeText />
      <EAHomeComp />
      <EAFooterComp />
    </div>
  )
}

export default EAHomePage
