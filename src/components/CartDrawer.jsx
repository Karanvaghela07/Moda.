import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Added import
import '../styles/cart.css';

const CartDrawer = () => {
    const { cartOpen, toggleCart, cartItems, removeFromCart } = useCart();
    const navigate = useNavigate(); // Added hook

    return (
        <AnimatePresence>
            {cartOpen && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="cart-header">
                            <h3>Shopping Bag ({cartItems.length})</h3>
                            <button onClick={toggleCart} className="close-btn">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">
                                    <p>Your bag is empty.</p>
                                    <button onClick={toggleCart} className="shop-now-btn">Shop Now</button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image1} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-price">${item.price}</p>
                                            <div className="item-controls">
                                                <div className="quantity">
                                                    <span>Qty: {item.quantity}</span>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="cart-footer">
                            <div className="total">
                                <span>Total</span>
                                <span>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                            </div>
                            <button
                                className="checkout-btn"
                                onClick={() => {
                                    toggleCart();
                                    navigate('/checkout');
                                }}
                            >
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
