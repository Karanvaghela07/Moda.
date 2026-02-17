import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Package } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/order-success.css';

const OrderSuccess = () => {
    const location = useLocation();
    const { orderId } = location.state || {};
    // Mock order ID if accessed directly for demo purposes
    const displayOrderId = orderId || `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    return (
        <div className="order-success-page">
            <div className="success-content">
                <motion.div
                    className="success-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="success-icon-wrapper"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <Check size={40} color="#4ade80" strokeWidth={3} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Order Confirmed
                    </motion.h1>

                    <motion.p
                        className="success-message"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Thank you for your purchase. We've received your order and will begin processing it right away.
                    </motion.p>

                    <motion.div
                        className="order-id-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="order-id-label">Order Reference</span>
                        <span className="order-id-value">{displayOrderId}</span>
                    </motion.div>

                    <motion.div
                        className="action-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link to="/order-history" className="btn-secondary">
                            View Order
                        </Link>
                        <Link to="/shop" className="btn-primary">
                            Continue Shopping <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderSuccess;
