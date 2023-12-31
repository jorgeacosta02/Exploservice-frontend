import { Routes, Route } from 'react-router-dom';
import GHomePage from './GlobalPages/GHomePage';
import ESHomePage from './ExploserviceSrc/ESPages/ESHomePage/ESHomePage';
import EAHome from './ExploagroSrc/EAPages/EAHome/EAHome';
import EAProduct from './ExploagroSrc/EAPages/EAProduct/EAProduct';
import EAContact from './ExploagroSrc/EAPages/EAContact/EAContact';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<GHomePage />} />

        {/*Exploservice Routes*/}
        <Route path="/exploservice" element={<ESHomePage />} />
        {/* <Route path="/exploservice/company" element={<Company />} /> */}
  
        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHome />} />
        <Route path="/exploagro/product" element={<EAProduct />} />
        <Route path="/exploagro/contact" element={<EAContact />} />
      </Routes>
    </div>
  )
}

export default App
