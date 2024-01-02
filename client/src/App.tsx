import { Routes, Route } from 'react-router-dom';
import LandingPage from './GlobalPages/LandingPage';
import ESHomePage from './ExploserviceSrc/ESPages/ESHomePage/ESHomePage';
import EAHomePage from './ExploagroSrc/EAPages/EAHomePage/EAHomePage';
import EAProductPage from './ExploagroSrc/EAPages/EAProductPage/EAProductPage';
import EAContactPage from './ExploagroSrc/EAPages/EAContactPage/EAContactPage';
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
        <Route path="/exploagro/" element={<EAHomePage />} />
        <Route path="/exploagro/product" element={<EAProductPage />} />
        <Route path="/exploagro/contact" element={<EAContactPage />} />
      </Routes>
    </div>
  )
}

export default App
