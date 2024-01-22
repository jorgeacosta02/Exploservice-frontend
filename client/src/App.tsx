import { Routes, Route } from 'react-router-dom';
import LandingPage from './GlobalPages/LandingPage';
import ESCompanyPage from './pages/companyPage/companyPage';
import ESServicesPage from './ExploserviceSrc/ESPages/ESServicesPage/ESServicesPage';
import EAHomePage from './ExploagroSrc/EAPages/EAHomePage/EAHomePage';
import EAProductPage from './ExploagroSrc/EAPages/EAProductPage/EAProductPage';
import EAContactPage from './ExploagroSrc/EAPages/EAContactPage/EAContactPage';
import ESEquipmentPage from './pages/equipmentPage/equipmentPage';
import ESJobsPage from './ExploserviceSrc/ESPages/ESJobsPage/ESJobsPage';
import ESContactPage from './pages/contactPage/contactPage';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<LandingPage />} />

        {/*Exploservice Routes*/}
        <Route path="/company" element={<ESCompanyPage />} />
        <Route path="/services" element={<ESServicesPage />} />
        <Route path="/equipment" element={<ESEquipmentPage />} />
        <Route path="/works" element={<ESJobsPage />} />
        <Route path="/contact" element={<ESContactPage />} />
  
        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHomePage />} />
        <Route path="/exploagro/product" element={<EAProductPage />} />
        <Route path="/exploagro/contact" element={<EAContactPage />} />
      </Routes>
    </div>
  )
}

export default App
