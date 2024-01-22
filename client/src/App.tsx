import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import CompanyPage from './pages/companyPage/companyPage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EAHomePage from './ExploagroSrc/EAPages/EAHomePage/EAHomePage';
import EAProductPage from './ExploagroSrc/EAPages/EAProductPage/EAProductPage';
import EAContactPage from './ExploagroSrc/EAPages/EAContactPage/EAContactPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/lobsPage';
import ContactPage from './pages/contactPage/contactPage';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<LandingPage />} />

        {/*Exploservice Routes*/}
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
  
        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHomePage />} />
        <Route path="/exploagro/product" element={<EAProductPage />} />
        <Route path="/exploagro/contact" element={<EAContactPage />} />
      </Routes>
    </div>
  )
}

export default App
