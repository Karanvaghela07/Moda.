import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Check, Package, Pickaxe, Home, HelpCircle, Phone, Mail, CreditCard } from 'lucide-react';
import '../styles/orders.css';

const OrderDetails = () => {
    const { id } = useParams();
    const { orders } = useCart();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const found = orders.find(o => o.id === id);
        if (found) setOrder(found);
    }, [id, orders]);

    if (!order) return <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '100vh', background: 'var(--bg-color)', color: 'white' }}>Order not found</div>;

    // Status visual mapping
    const steps = [
        { label: 'Ordered', icon: <Check size={20} />, status: 'completed' },
        { label: 'Packed', icon: <Package size={20} />, status: 'completed' },
        { label: 'Shipped', icon: <Pickaxe size={20} />, status: 'current' },
        { label: 'Delivered', icon: <Home size={20} />, status: 'pending' }
    ];

    return (
        <div className="orders-page">
            <div className="orders-container">
                <div className="order-details-header">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="orders-title"
                        style={{ margin: 0 }}
                    >
                        Order #{order.id}
                    </motion.h1>
                    <button className="btn-secondary" style={{ border: '1px solid #333', padding: '0.8rem 1.5rem', color: 'white', background: 'transparent' }}>
                        Download Invoice
                    </button>
                </div>

                <div className="order-details-grid">
                    {/* Left Column: Tracking & Items */}
                    <div className="details-main">
                        <div className="glass-card tracking-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem' }}>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Arriving Soon</h3>
                                    <p style={{ color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Estimated Delivery: Tomorrow</p>
                                </div>
                            </div>

                            <div className="progress-track">
                                <div className="progress-line-bg"></div>
                                <motion.div
                                    className="progress-line-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: '66%' }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                ></motion.div>

                                <div className="progress-steps">
                                    {steps.map((step, index) => (
                                        <div key={index} className={`step-item ${step.status === 'completed' ? 'completed' : step.status === 'current' ? 'active' : ''}`}>
                                            <motion.div
                                                className="step-icon-box"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: index * 0.2, type: 'spring' }}
                                            >
                                                {step.icon}
                                            </motion.div>
                                            <span className="step-label">{step.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <h3 style={{ margin: '2rem 0 1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>Items</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {order.items.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    className="item-detail-row"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                >
                                    <img src={item.image1} alt={item.name} className="item-detail-img" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <h4 style={{ fontSize: '1.3rem' }}>{item.name}</h4>
                                            <span style={{ fontSize: '1.2rem' }}>${item.price}</span>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)' }}>Qty: {item.quantity}</p>
                                        <p style={{ color: 'var(--text-muted)' }}>Size: M</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Support & Info */}
                    <div className="details-sidebar">
                        <div className="glass-card info-card">
                            <h3><CreditCard size={20} style={{ marginRight: '10px' }} /> Payment Info</h3>
                            <div style={{ marginTop: '1.5rem', color: '#ccc', lineHeight: '1.6' }}>
                                <p>Visa ending in 4242</p>
                                <p>Total: <strong style={{ color: 'white' }}>${order.total}</strong></p>
                                <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '1rem' }}>Payment Secure</p>
                            </div>
                        </div>

                        <div className="glass-card info-card">
                            <h3><HelpCircle size={20} style={{ marginRight: '10px' }} /> Need Help?</h3>
                            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <button className="btn-outline-icon"><Phone size={18} /> Call Support</button>
                                <button className="btn-outline-icon"><Mail size={18} /> Email Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderDetails;
