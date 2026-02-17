import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Careers from './pages/Careers';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import OrderHistory from './pages/OrderHistory';
import OrderDetails from './pages/OrderDetails';
import './styles/global.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <SmoothScroll>
          <div className="app-container">
            <Navbar />
            <CartDrawer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </SmoothScroll>
      </CartProvider>
    </Router>
  );
}

export default App;

