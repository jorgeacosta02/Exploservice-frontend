import { Routes, Route } from 'react-router-dom';
import GHomePage from './GlobalPages/GHomePage';
import ESHomePage from './ExploserviceSrc/ESPages/ESHomePage/ESHomePage';
import ESServicesPage from './ExploserviceSrc/ESPages/ESServicesPage/ESServicesPage';
import ESServicesFormComp from './ExploserviceSrc/ESComponents/ESServicesFormComp/ESServicesFormComp';
import EAHome from './ExploagroSrc/EAPages/EAHome/EAHome';
import EAProduct from './ExploagroSrc/EAPages/EAProduct/EAProduct';
import EACompany from './ExploagroSrc/EAPages/EACompany/EACompany';
import EAContact from './ExploagroSrc/EAPages/EAContact/EAContact';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<GHomePage />} />

        {/*Exploservice Routes*/}
        <Route path="/exploservice/company" element={<ESHomePage />} />
        <Route path="/exploservice/services" element={<ESServicesPage />} />
        {/* <Route path="/exploservice/company" element={<Company />} /> */}
        <Route path="/exploservice/esservicesform" element={<ESServicesFormComp />} />

        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHome />} />
        <Route path="/exploagro/product" element={<EAProduct />} />
        <Route path="/exploagro/company" element={<EACompany />} />
        <Route path="/exploagro/contact" element={<EAContact />} />
      </Routes>
    </div>
  )
}

export default App
