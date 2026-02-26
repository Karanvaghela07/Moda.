import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import Footer from '../components/Footer';

const NewArrivals = () => {
    // Filter for "New" items (simulated by taking the first 8 items for now)
    const newProducts = products.slice(0, 8);

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1rem' }}
                    >
                        <Sparkles size={40} color="#e11b23" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}
                    >
                        Just Dropped
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#666', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                    >
                        The freshest gear from the vault. Cop it before it vanishes.
                    </motion.p>
                </div>

                <ProductGrid products={newProducts} />

                <div style={{ textAlign: 'center', margin: '6rem 0' }}>
                    <p style={{ color: '#999', fontSize: '0.9rem', fontStyle: 'italic' }}>New items added every Friday.</p>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
