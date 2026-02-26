import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/products.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const navigate = useNavigate();

    const inWishlist = isInWishlist(product.id);

    // Flipkart/Amazon style pricing logic
    const currentPrice = product.price * 80;
    const mrpPrice = product.price * 120; // Simulated 33% markup

    // Determine random delivery date (e.g., "Tomorrow") for Amazon feel
    const deliveryNote = product.id % 2 === 0 ? "FREE Delivery Tomorrow" : "FREE Delivery by Friday";

    return (
        <motion.div
            className="az-product-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="az-image-wrapper">
                <img src={product.image1} alt={product.name} className="az-product-img" />
                <button
                    className="az-wishlist-circle"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                >
                    <Heart
                        size={18}
                        fill={inWishlist ? "#e11b23" : "none"}
                        color={inWishlist ? "#e11b23" : "#888"}
                    />
                </button>
            </div>

            <div className="az-info-wrapper">
                <div className="az-brand">THE INDIE STORE</div>
                <h3 className="az-title" title={product.name}>{product.name}</h3>

                <div className="az-rating-row">
                    <div className="az-stars">
                        {[1, 2, 3, 4].map(s => <Star key={s} size={14} fill="#FF9900" color="#FF9900" />)}
                        <Star size={14} fill="none" color="#FF9900" />
                    </div>
                    <span className="az-rating-count">({Math.floor(Math.random() * 500) + 50})</span>
                </div>

                <div className="az-price-row">
                    <span className="currency">₹</span>
                    <span className="az-current-price">{currentPrice.toLocaleString()}</span>
                    <span className="az-mrp-price">₹{mrpPrice.toLocaleString()}</span>
                    <span className="az-discount">(33% off)</span>
                </div>

                <div className="az-delivery">
                    <CheckCircle size={12} color="#00A85A" style={{ display: 'inline', marginRight: '4px' }} />
                    {deliveryNote}
                </div>

                <button
                    className="az-add-cart-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                >
                    Add to cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
