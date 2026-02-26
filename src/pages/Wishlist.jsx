import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react'; // Using Ghost icon for the "Lonely Ghost" vibe
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import '../styles/global.css'; // Ensure global styles are available

const Wishlist = () => {
    const { wishlistItems } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="wishlist-empty-container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                padding: '120px 2rem 2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Ghost size={120} strokeWidth={1} color="#333" style={{ marginBottom: '1.5rem' }} />
                </motion.div>

                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    color: '#1a1a1a',
                    marginBottom: '1rem'
                }}>
                    Your wishlist is lonely and looking for love.
                </h2>

                <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '2rem',
                    maxWidth: '500px'
                }}>
                    Add products to your wishlist, review them anytime and easily move to cart.
                </p>

                <div className="wishlist-actions" style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/shop" style={{
                        padding: '12px 30px',
                        border: '2px solid #555',
                        background: '#fff',
                        color: '#333',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        transition: 'all 0.3s'
                    }} className="btn-outline">
                        Continue Shopping
                    </Link>

                    <Link to="/login" style={{
                        padding: '12px 30px',
                        background: '#1a8b84', // Teal accent similar to Souled Store
                        color: '#fff',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        border: 'none',
                        transition: 'all 0.3s'
                    }}>
                        Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page container" style={{ padding: '120px 1rem 3rem' }}>
            <div className="section-header-commercial">
                <h2>MY WISHLIST ({wishlistItems.length})</h2>
                <div className="header-line"></div>
            </div>

            <div className="product-grid">
                {wishlistItems.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
