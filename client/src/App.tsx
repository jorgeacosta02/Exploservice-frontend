import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
