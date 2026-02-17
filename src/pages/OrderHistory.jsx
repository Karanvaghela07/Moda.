import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import '../styles/orders.css';
import { Package, CreditCard, Clock, Star } from 'lucide-react';

const OrderHistory = () => {
    const { orders } = useCart();

    // Mock Recommended Products
    const recommended = [
        { id: 101, name: "Velvet Blazer", price: 299, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop" },
        { id: 102, name: "Silk Scarf", price: 89, img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1891&auto=format&fit=crop" },
        { id: 103, name: "Leather Boots", price: 450, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1887&auto=format&fit=crop" }
    ];

    return (
        <div className="orders-page">
            <div className="orders-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="orders-title"
                        style={{ margin: 0 }}
                    >
                        Your Archives
                    </motion.h1>
                    <div style={{ color: 'var(--text-muted)' }}>MEMBER SINCE 2024</div>
                </div>

                {/* Account Stats Dashboard */}
                <div className="stats-grid">
                    <motion.div className="stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Package size={32} color="white" strokeWidth={1} />
                        <div>
                            <h3>{orders.length}</h3>
                            <p>Total Orders</p>
                        </div>
                    </motion.div>
                    <motion.div className="stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <CreditCard size={32} color="white" strokeWidth={1} />
                        <div>
                            <h3>${orders.reduce((acc, order) => acc + parseFloat(order.total), 0).toFixed(2)}</h3>
                            <p>Total Spent</p>
                        </div>
                    </motion.div>
                    <motion.div className="stat-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Clock size={32} color="white" strokeWidth={1} />
                        <div>
                            <h3>Gold</h3>
                            <p>Member Tier</p>
                        </div>
                    </motion.div>
                </div>

                {orders.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="empty-state"
                    >
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Your archive is currently empty.</p>
                        <Link to="/shop" className="btn-primary">Explore The Collection</Link>
                    </motion.div>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '6rem' }}
                    >
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginTop: '2rem' }}>Recent Orders</h2>
                        {orders.map(order => (
                            <motion.div
                                key={order.id}
                                className="order-card"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } }
                                }}
                            >
                                <div className="order-header">
                                    <div>
                                        <p className="order-label">Order Placed</p>
                                        <p className="order-value">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="order-label">Total</p>
                                        <p className="order-value">${order.total}</p>
                                    </div>
                                    <div>
                                        <p className="order-label">Order ID</p>
                                        <p className="order-value">{order.id}</p>
                                    </div>
                                    <div>
                                        <Link to={`/order/${order.id}`} className="btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.85rem' }}>
                                            Track Package
                                        </Link>
                                    </div>
                                </div>
                                <div className="order-items-scroll">
                                    {order.items.map(item => (
                                        <div key={item.id} className="order-item-preview">
                                            <img src={item.image1} alt={item.name} />
                                            <p style={{ fontSize: '0.85rem', color: '#ccc' }}>{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Recommendations Section */}
                <div style={{ marginTop: '6rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Recommended For You</h2>
                    <div className="recommendations-grid">
                        {recommended.map((item, i) => (
                            <motion.div
                                key={item.id}
                                className="rec-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="rec-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="rec-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderHistory;
