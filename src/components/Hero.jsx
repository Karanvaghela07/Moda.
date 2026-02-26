import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Star, Globe, Sparkles } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax and smooth effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Spring physics for spotlight
    const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    const title = "MODA ELEGANCE";
    const words = title.split(" ");

    return (
        <section
            className="hero-section"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Background Effect */}
            <motion.div
                className="hero-spotlight"
                style={{
                    left: spotlightX,
                    top: spotlightY,
                }}
            />

            <motion.div
                className="hero-background-wrapper"
                style={{ y, scale, opacity }}
            >
                <div className="editorial-grid">
                    <div className="editorial-item item-main">
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                            alt="Fashion Editorial 1"
                        />
                    </div>
                    <div className="editorial-item item-side-1">
                        <motion.img
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop"
                            alt="Fashion Editorial 2"
                        />
                    </div>
                    <div className="editorial-item item-side-2">
                        <motion.img
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                            alt="Fashion Editorial 3"
                        />
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </motion.div>

            <div className="container hero-content-v2">
                <div className="hero-badge">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Sparkles size={14} className="icon-pulse" />
                        ESTABLISHED 2024
                    </motion.span>
                </div>

                <div className="hero-title-container">
                    {words.map((word, i) => (
                        <div key={i} className="word-wrapper">
                            <motion.span
                                custom={i}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="hero-title-word"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Redefining high-fashion through minimal silhouettes and
                    unrivaled craftsmanship. Experience the new era of boutique luxury.
                </motion.p>

                <div className="hero-actions">
                    <motion.button
                        className="btn-magnetic btn-premium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <span className="btn-content">
                            EXPLORE COLLECTION
                            <ArrowRight size={18} />
                        </span>
                        <div className="btn-glow"></div>
                    </motion.button>
                </div>

                <motion.div
                    className="hero-footer-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="info-item">
                        <Globe size={14} />
                        <span>GLOBAL SHIPPING</span>
                    </div>
                    <div className="info-divider"></div>
                    <div className="info-item">
                        <Star size={14} />
                        <span>CURATED SELECTION</span>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-hint">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mouse-icon"
                >
                    <div className="mouse-wheel"></div>
                </motion.div>
                <span>SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;
