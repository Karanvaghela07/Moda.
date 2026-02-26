import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderHistory from './pages/OrderHistory';
import UserProfile from './pages/UserProfile';
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
import Support from './pages/Support';
import OrderSuccess from './pages/OrderSuccess';
import OrderDetails from './pages/OrderDetails';
import Wishlist from './pages/Wishlist';
import NewArrivals from './pages/NewArrivals';
import BestSellers from './pages/BestSellers';
import Accessories from './pages/Accessories';
import Sale from './pages/Sale';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <WishlistProvider>
            <SmoothScroll>
              <div className="app-container">
                <Navbar />
                <CartDrawer />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/new-arrivals" element={<NewArrivals />} />
                    <Route path="/best-sellers" element={<BestSellers />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<UserProfile />} />
                    <Route path="/orders" element={<OrderHistory />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/order/:id" element={<OrderDetails />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </SmoothScroll>
          </WishlistProvider>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;

