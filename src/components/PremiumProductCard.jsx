import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/premium-card.css';

const PremiumProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1, 'M'); // Default size M for quick add
    };

    return (
        <div
            className="premium-product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="ppc-image-wrapper">
                <Link to={`/product/${product.id}`} className="ppc-image-link">
                    <img
                        src={product.image1}
                        alt={product.name}
                        className={`ppc-img ppc-main-img ${isHovered ? 'hidden' : ''}`}
                    />
                    <img
                        src={product.image2}
                        alt={product.name}
                        className={`ppc-img ppc-hover-img ${isHovered ? 'visible' : ''}`}
                    />
                </Link>

                {/* Top Badges */}
                <div className="ppc-badges">
                    <span className="ppc-badge new">NEW DEPLOYMENT</span>
                </div>

                {/* Wishlist Button */}
                <button
                    className="ppc-wishlist-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                >
                    <Heart
                        size={20}
                        fill={inWishlist ? "#ff3333" : "none"}
                        color={inWishlist ? "#ff3333" : "#ffffff"}
                        className="ppc-wishlist-icon"
                    />
                </button>

                {/* Quick Action Overlay on Hover */}
                <div className={`ppc-quick-action ${isHovered ? 'slide-up' : ''}`}>
                    <button className="ppc-add-btn" onClick={handleAddToCart}>
                        <ShoppingBag size={18} />
                        <span>QUICK ADD</span>
                    </button>
                </div>
            </div>

            <div className="ppc-info">
                <div className="ppc-info-header">
                    <h3 className="ppc-name">{product.name}</h3>
                    <p className="ppc-category">{product.category}</p>
                </div>
                <div className="ppc-price-row">
                    <span className="ppc-price">₹ {product.price * 80}</span>
                </div>
            </div>
        </div>
    );
};

export default PremiumProductCard;
