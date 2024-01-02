import { Routes, Route } from 'react-router-dom';
import LandingPage from './GlobalPages/LandingPage';
import ESHomePage from './ExploserviceSrc/ESPages/ESHomePage/ESHomePage';
import EAHome from './ExploagroSrc/EAPages/EAHome/EAHome';
import EAProduct from './ExploagroSrc/EAPages/EAProduct/EAProduct';
import EAContact from './ExploagroSrc/EAPages/EAContact/EAContact';
import ESEquipmentPage from './ExploserviceSrc/ESPages/ESEquipmentPage/ESEquipmentPage';
import ESWorksPage from './ExploserviceSrc/ESPages/ESWorksPage/ESWorksPage';
import ESContactPage from './ExploserviceSrc/ESPages/ESContactPage/ESContactPage';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<LandingPage />} />

        {/*Exploservice Routes*/}
        <Route path="/exploservice" element={<ESHomePage />} />
        <Route path="/exploservice/equipment" element={<ESEquipmentPage />} />
        <Route path="/exploservice/works" element={<ESWorksPage />} />
        <Route path="/exploservice/contact" element={<ESContactPage />} />
  
        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHome />} />
        <Route path="/exploagro/product" element={<EAProduct />} />
        <Route path="/exploagro/contact" element={<EAContact />} />
      </Routes>
    </div>
  )
}

export default App
