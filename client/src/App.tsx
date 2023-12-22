import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Company from './pages/Company/Company';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </div>
  )
}

export default App
