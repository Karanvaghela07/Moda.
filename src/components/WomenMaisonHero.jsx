import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bespoke.css';

const CATEGORIES = [
    { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop' },
    { name: 'Tops', img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=200&auto=format&fit=crop' },
    { name: 'Ethnic', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Jeans', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=200&auto=format&fit=crop' },
    { name: 'Activewear', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Footwear', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Bags', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=200&auto=format&fit=crop' },
    { name: 'Jewellery', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200&auto=format&fit=crop' },
];

const LOOKBOOK = [
    { label: 'SUMMER BRUNCH', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400&auto=format&fit=crop' },
    { label: 'OFFICE CHIC', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop' },
    { label: 'EVENING GLAM', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=400&auto=format&fit=crop' }
];

const WomenMaisonHero = () => (
    <div className="wmh-root">
        {/* Full-width elegant hero */}
        <div
            className="wmh-hero-banner"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop')` }}
        >
            <div className="wmh-hero-overlay">
                <motion.div
                    className="wmh-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="wmh-subtitle">NEW ARRIVALS</span>
                    <h1 className="wmh-title">The Spring<br />Collection</h1>
                    <a href="#grid" className="wmh-btn">DISCOVER NOW</a>
                </motion.div>

                {/* Overlapping Lookbook Cards (Zara/Mango style) */}
                <div className="wmh-lookbook-track">
                    {LOOKBOOK.map((look, i) => (
                        <motion.div
                            key={look.label}
                            className="wmh-look-card"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                            <img src={look.img} alt={look.label} />
                            <div className="wmh-look-label">{look.label}</div>
                            <div className="wmh-look-hover">SHOP LOOK →</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Visual Category Circles (Very common in Women's fashion e-commerce) */}
        <div className="wmh-categories">
            <h3 className="wmh-cat-header">SHOP BY CATEGORY</h3>
            <div className="wmh-cat-grid">
                {CATEGORIES.map((cat, i) => (
                    <motion.a
                        key={cat.name}
                        href="#grid"
                        className="wmh-cat-circle-wrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                    >
                        <div className="wmh-cat-circle">
                            <img src={cat.img} alt={cat.name} />
                        </div>
                        <span className="wmh-cat-name">{cat.name}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    </div>
);

export default WomenMaisonHero;
