import EANavBar from "../../EALayouts/EANavBar/EANavBar.tsx";
import EAHomeImg from "../../EAComponents/EAHomeImg/EAHomeImg.tsx";
import EAHomeText from "../../EAComponents/EAHomeText/EAHomeText.tsx";
import EAComments from "../../EAComponents/EAComments/EAComments.tsx";
import EAFooter from "../../EAComponents/EAFooter/EAFooter.tsx";

const EAHome = () => {
  return (
    <div>
      <EANavBar />
      <EAHomeImg />
      <EAHomeText />
      <EAComments />
      <EAFooter />
    </div>
  )
}

export default EAHome
