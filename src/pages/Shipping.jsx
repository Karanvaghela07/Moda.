import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Globe, Clock, Package } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/about.css';

const Shipping = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1.5rem', background: '#e11b23', padding: '1rem', borderRadius: '50%' }}
                    >
                        <Globe size={40} color="#fff" />
                    </motion.div>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Global Logistics</h1>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>We move fast. So does your gear.</p>
                </div>

                {/* GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <Truck size={32} />, title: "Standard Domestic", time: "5-7 Business Days", price: "Free over $150", desc: "Reliable ground shipping for all domestic orders. We use eco-friendly packaging." },
                        { icon: <Clock size={32} />, title: "Express Service", time: "2-3 Business Days", price: "$25.00", desc: "For those who need their fit immediately. Prioritized processing and air transport." },
                        { icon: <Globe size={32} />, title: "International", time: "7-14 Business Days", price: "Calculated at checkout", desc: "DHL Express global delivery. Duties and taxes are calculated at checkout for transparency." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ padding: '2.5rem', border: '1px solid #eee', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                        >
                            <div style={{ marginBottom: '1.5rem', color: '#e11b23' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>{item.time} — {item.price}</div>
                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shipping;

