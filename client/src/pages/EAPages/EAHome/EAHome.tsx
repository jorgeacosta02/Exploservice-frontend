import EANavBar from "../../../layouts/EALayouts/EANavBar/EANavBar.tsx";
import EAHomeImg from "../../../components/EAComponents/EAHomeImg/EAHomeImg.tsx";
import EAHomeText from "../../../components/EAComponents/EAHomeText/EAHomeText.tsx";
import EAComments from "../../../components/EAComponents/EAComments/EAComments.tsx";
import EAFooter from "../../../components/EAComponents/EAFooter/EAFooter.tsx";

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
