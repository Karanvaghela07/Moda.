import React from 'react';
import { motion } from 'framer-motion';
import { Percent } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import Footer from '../components/Footer';

const Sale = () => {
    // Filter for "Sale" items
    const saleItems = products.slice(15, 25);

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1rem', background: '#ffe4e6', padding: '1rem', borderRadius: '50%' }}
                    >
                        <Percent size={32} color="#e11b23" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#e11b23' }}
                    >
                        Vault Clearance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#666', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                    >
                        Last chance to cop these icons. Once they're gone, they're gone.
                    </motion.p>
                </div>

                <ProductGrid products={saleItems} />
            </div>
        </div>
    );
};

export default Sale;
