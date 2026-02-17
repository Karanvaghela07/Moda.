import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { toggleCart, cartCount } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
        { name: 'Orders', path: '/order-history' },
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
                <div className="container nav-container">
                    <Link to="/" className="logo">
                        MODA.
                    </Link>

                    <div className="nav-links desktop-only">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="nav-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-icons">
                        <Search
                            className="icon"
                            size={24}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                        <div className="cart-icon-wrapper" onClick={toggleCart}>
                            <ShoppingBag className="icon" size={24} />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </div>
                        <Menu
                            className="icon mobile-only"
                            size={24}
                            onClick={() => setIsMobileMenuOpen(true)}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            className="search-overlay"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="container">
                                <form onSubmit={handleSearch} className="search-form">
                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                    />
                                    <button type="submit"><Search size={20} /></button>
                                    <X size={24} className="close-search" onClick={() => setIsSearchOpen(false)} />
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                    >
                        <div className="mobile-menu-header">
                            <span className="logo">MODA.</span>
                            <X
                                className="icon close-icon"
                                size={24}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        </div>
                        <div className="mobile-links">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <Link
                                        to={link.path}
                                        className="mobile-link"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
