import { Routes, Route } from 'react-router-dom';
import Home from './pages/Exploagro/Home/Home';
import Product from './pages/Exploagro/Product/Product';
import Company from './pages/Exploagro/Company/Company';
import Contact from './pages/Exploagro/Contact/Contact';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<Home />} />

        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<Home />} />
        <Route path="/exploagro/product" element={<Product />} />
        <Route path="/exploagro/company" element={<Company />} />
        <Route path="/exploagro/contact" element={<Contact />} />

        {/*Exploservice Routes*/}
        <Route path="/exploservice/" element={<Home />} />
        <Route path="/exploservice/product" element={<Product />} />
        <Route path="/exploservice/company" element={<Company />} />
        <Route path="/exploservice/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
