import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import '../styles/home.css';

const ModernHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={containerRef} className="modern-hero">
            <motion.div style={{ y, scale, opacity }} className="modern-hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2560&auto=format&fit=crop"
                    alt="Hero Fashion"
                />
                <div className="modern-hero-overlay"></div>
            </motion.div>

            <div className="modern-hero-content container">
                <div className="hero-text-wrapper">
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-subtitle"
                    >
                        EST. 2026 — PREMIUM COLLECTION
                    </motion.span>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="hero-title"
                        >
                            REDEFINE
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="hero-title outline"
                        >
                            ELEGANCE
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-actions"
                    >
                        <button className="primary-btn">
                            SHOP NOW <ArrowRight size={20} />
                        </button>
                        <button className="video-btn">
                            <div className="play-icon">
                                <Play size={16} fill="currentColor" />
                            </div>
                            <span>WATCH FILM</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span>SCROLL</span>
                <div className="line"></div>
            </motion.div>
        </div>
    );
};

export default ModernHero;
