import React from 'react';
import '../styles/promo-grid.css';
import { motion } from 'framer-motion';

const PromoGrid = () => {
    return (
        <section className="promo-grid-section container">
            <div className="promo-grid-wrapper">
                {/* Left Large Promo */}
                <motion.a
                    href="/shop?collection=streetwear"
                    className="promo-card large-promo"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                >
                    <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1035&auto=format&fit=crop" alt="Streetwear Collection" loading="lazy" />
                    <div className="promo-overlay"></div>
                    <div className="promo-content">
                        <span>NEW DROP</span>
                        <h3>URBAN<br />UTILITY</h3>
                        <div className="promo-btn">SHOP COLLECTION</div>
                    </div>
                </motion.a>

                {/* Right Top Promo */}
                <motion.a
                    href="/sneakers"
                    className="promo-card half-promo"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                >
                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" alt="Sneakers" loading="lazy" />
                    <div className="promo-overlay"></div>
                    <div className="promo-content">
                        <span>FOOTWEAR</span>
                        <h3>SNEAKER HEAT</h3>
                    </div>
                </motion.a>

                {/* Right Bottom Promo */}
                <motion.a
                    href="/accessories"
                    className="promo-card half-promo"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                >
                    <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1000&auto=format&fit=crop" alt="Accessories" loading="lazy" />
                    <div className="promo-overlay"></div>
                    <div className="promo-content">
                        <span>THE ESSENTIALS</span>
                        <h3>LUXE ACCESSORIES</h3>
                    </div>
                </motion.a>
            </div>
        </section>
    );
};

export default PromoGrid;
