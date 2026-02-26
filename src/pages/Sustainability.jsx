import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const Sustainability = () => {
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1.5rem' }}
                    >
                        <Leaf size={50} color="#10b981" fill="#ecfdf5" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1 }}
                    >
                        Conscious <br />Creation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}
                    >
                        We believe looking good shouldn't cost the Earth. <br /> Here’s how we’re keeping our footprint ghost-like.
                    </motion.p>
                </div>

                {/* GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {[
                        { icon: <Recycle size={32} />, title: "Recycled Packaging", desc: "Our polybags are 100% recycled and compostable. No single-use plastics here." },
                        { icon: <Globe size={32} />, title: "Local Sourcing", desc: "90% of our fabrics are sourced within 500 miles of our factories to cut transport emissions." },
                        { icon: <Zap size={32} />, title: "On-Demand Production", desc: "We print small batches to avoid dead stock. No landfills, just limited editions." },
                        { icon: <Leaf size={32} />, title: "Eco-Inks", desc: "Water-based, toxin-free inks that are safe for you and the water supply." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            variants={variants}
                            style={{ padding: '2rem', border: '1px solid #f0f0f0', borderRadius: '12px', background: '#fafafa' }}
                        >
                            <div style={{ color: '#10b981', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM STATEMENT */}
                <div style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem', background: '#f0fdf4', borderRadius: '20px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#065f46', marginBottom: '1rem' }}>"PLANET A FITS."</h2>
                    <p style={{ color: '#047857' }}>Because there is no Planet B.</p>
                </div>

            </div>
        </div>
    );
};

export default Sustainability;
