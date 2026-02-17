import React from 'react';
import { motion } from 'framer-motion';
import '../styles/trending.css';

const Trending = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="trending-section">
            <div className="marquee-container">
                <motion.div
                    className="marquee-content"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <span>NEW SEASON ARRIVALS — SUMMER 2026 — FREE SHIPPING WORLDWIDE — </span>
                    <span>NEW SEASON ARRIVALS — SUMMER 2026 — FREE SHIPPING WORLDWIDE — </span>
                    <span>NEW SEASON ARRIVALS — SUMMER 2026 — FREE SHIPPING WORLDWIDE — </span>
                </motion.div>
            </div>

            <div className="container promo-banner">
                <div className="promo-text">
                    <h2>THE FUTURE OF FASHION</h2>
                    <p>Sustainable materials meeting avant-garde design.</p>
                </div>
            </div>
        </div>
    );
};

export default Trending;
