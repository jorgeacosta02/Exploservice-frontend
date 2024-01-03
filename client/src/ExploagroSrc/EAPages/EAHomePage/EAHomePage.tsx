import EANavBarLayout from "../../EALayouts/EANavBarLayout/EANavBarLayout.tsx";
import EAHomeImgComp from "../../EAComponents/EAHomeImgComp/EAHomeImgComp.tsx";
import EAHomeTextComp from "../../EAComponents/EAHomeText/EAHomeTextComp.tsx";
import EAHomeComp from "../../EAComponents/EAHomeComp/EAHomeComp..tsx";
import EAFooterComp from "../../EAComponents/EAFooterComp/EAFooterComp.tsx";

const EAHomePage = () => {
  return (
    <div>
      <EANavBarLayout />
      <EAHomeImgComp />
      <EAHomeTextComp />
      <EAHomeComp />
      <EAFooterComp />
    </div>
  )
}

export default EAHomePage
