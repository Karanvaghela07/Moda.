import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import '../styles/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { toggleCart, cartCount } = useCart();
    const { wishlistItems } = useWishlist();
    const { currentUser } = useAuth();
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
        { name: 'MEN', path: '/men' },
        { name: 'WOMEN', path: '/women' },
        { name: 'KIDS', path: '/kids' },
        { name: 'DISCOVER', path: '/shop' },
        { name: 'COLLECTIONS', path: '/collections' },
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container nav-container">
                    <Link to="/" className="logo-link">
                        <img src="/logo.svg" alt="The Indie Store" className="nav-logo-img" style={{ height: '75px' }} />
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

                        {/* Wishlist Icon */}
                        <div className="wishlist-icon-wrapper" style={{ position: 'relative' }}>
                            <Link to="/wishlist" className="icon">
                                <Heart size={24} />
                            </Link>
                            {wishlistItems && wishlistItems.length > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    background: 'var(--accent-red)',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%'
                                }}></span>
                            )}
                        </div>

                        {/* User Account Icon — goes to /account if logged in, /login if not */}
                        <div className="user-icon-wrapper" style={{ position: 'relative' }}>
                            <Link to={currentUser ? '/account' : '/login'} className="icon" title={currentUser ? `Hi, ${currentUser.name}` : 'Login'}>
                                {currentUser ? (
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 28,
                                        height: 28,
                                        borderRadius: '50%',
                                        background: '#e11b23',
                                        color: '#fff',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        letterSpacing: 0,
                                        lineHeight: 1,
                                        fontFamily: 'Syncopate, sans-serif'
                                    }}>
                                        {currentUser.name.charAt(0).toUpperCase()}
                                    </span>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                )}
                            </Link>
                        </div>

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
                            <img src="/logo.svg" alt="The Indie Store" style={{ height: '40px' }} />
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
