import { Routes, Route } from 'react-router-dom';
import GHome from './GlobalPages/GHome';
import ESHome from './ExploserviceSrc/ESPages/ESHome/ESHome';
import EAHome from './ExploagroSrc/EAPages/EAHome/EAHome';
import EAProduct from './ExploagroSrc/EAPages/EAProduct/EAProduct';
import EACompany from './ExploagroSrc/EAPages/EACompany/EACompany';
import EAContact from './ExploagroSrc/EAPages/EAContact/EAContact';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<GHome />} />

        {/*Exploservice Routes*/}
        <Route path="/exploservice/" element={<ESHome />} />
        {/* <Route path="/exploservice/product" element={<Product />} /> */}
        {/* <Route path="/exploservice/company" element={<Company />} /> */}
        {/* <Route path="/exploservice/contact" element={<Contact />} /> */}

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
