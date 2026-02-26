import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, Mail, Package } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/about.css';

const Returns = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1.5rem', background: '#000', padding: '1rem', borderRadius: '50%' }}
                    >
                        <RefreshCw size={40} color="#fff" />
                    </motion.div>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Returns & Exchanges</h1>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>Something not right? We'll fix it.</p>
                </div>

                {/* STEPS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {[
                        { icon: <Mail size={32} />, step: "01", title: "Initiate Return", desc: "Log in to your account and select the order you wish to return. Generate a pre-paid label instantly." },
                        { icon: <Package size={32} />, step: "02", title: "Pack & Ship", desc: "Pack the items in original packaging. Attach the label and drop it at any authorized courier location." },
                        { icon: <RefreshCw size={32} />, step: "03", title: "Refund or Exchange", desc: "Once inspected, we process refunds within 48 hours. Exchanges are shipped immediately." }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '4rem', color: '#f0f0f0', fontWeight: '900', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.step}</div>
                            <div style={{ margin: '-20px auto 1.5rem', width: '60px', height: '60px', background: '#e11b23', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'white', position: 'relative' }}>
                                {/* Simple Icon placeholder if import fails, but we used lucide above */}
                                {i === 0 && <Mail size={24} />}
                                {i === 1 && <CheckCircle size={24} />}
                                {i === 2 && <RefreshCw size={24} />}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: '6rem', padding: '4rem', background: '#fafafa', textAlign: 'center', border: '1px solid #eee', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>HAVE QUESTIONS?</h3>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Our support team is available 24/7 to assist with your returns.</p>
                    <button style={{ padding: '1rem 3rem', background: '#000', color: '#fff', border: 'none', fontSize: '0.9rem', letterSpacing: '0.1em', cursor: 'pointer', borderRadius: '4px' }}>CONTACT SUPPORT</button>
                </div>
            </div>
        </div>
    );
};

export default Returns;

