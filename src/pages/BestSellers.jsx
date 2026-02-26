import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import Footer from '../components/Footer';

const BestSellers = () => {
    // Filter for "Best Sellers" (simulated)
    const bestSellers = products.slice(8, 16);

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
                        <Flame size={40} color="#e11b23" fill="#e11b23" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}
                    >
                        Trending Now
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#666', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem' }}
                    >
                        The community's favorites. These don't stay in stock for long.
                    </motion.p>
                </div>

                <ProductGrid products={bestSellers} />
            </div>
        </div>
    );
};

export default BestSellers;
