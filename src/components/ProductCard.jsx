import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/products.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="product-image-container">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image1} alt={product.name} className="product-img main-img" />
                    <img src={product.image2} alt={product.name} className="product-img hover-img" />
                </Link>

                <button className="icon-btn wishlist-btn">
                    <Heart size={20} />
                </button>

                <button
                    className="quick-add-btn"
                    onClick={() => addToCart(product)}
                >
                    <Plus size={20} />
                    <span>Quick Add</span>
                </button>
            </div>

            <div className="product-info">
                <div className="product-header">
                    <h3>{product.name}</h3>
                    <span className="price">${product.price}</span>
                </div>
                <p className="category">{product.category}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
