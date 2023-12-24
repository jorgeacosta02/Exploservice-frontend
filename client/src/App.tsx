import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EAHome from './pages/EAPages/EAHome/EAHome';
import Product from './pages/EAPages/EAProduct/EAProduct';
import Company from './pages/EAPages/EACompany/EACompany';
import Contact from './pages/EAPages/EAContact/EAContact';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<Home />} />

        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHome />} />
        <Route path="/exploagro/product" element={<Product />} />
        <Route path="/exploagro/company" element={<Company />} />
        <Route path="/exploagro/contact" element={<Contact />} />

        {/*Exploservice Routes*/}
        {/* <Route path="/exploservice/" element={<ESHome />} />
        <Route path="/exploservice/product" element={<Product />} />
        <Route path="/exploservice/company" element={<Company />} />
        <Route path="/exploservice/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
