import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <div className="hero-section" ref={containerRef}>
            <motion.div
                className="hero-background"
                style={{ y, scale, opacity }}
            >
                <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion Model Editorial"
                />
                <div className="overlay"></div>
            </motion.div>

            <div className="container hero-content">
                <div className="hero-text-wrapper" style={{ marginTop: '26vh' }}>
                    <motion.h1
                        style={{ y: textY }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        ELEVATE <br /> YOUR STYLE
                    </motion.h1>
                </div>

                <div className="hero-subtext-wrapper">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        Discover the new collection. Bold textures, refined cuts,
                        and timeless elegance for the modern visionary.
                    </motion.p>
                </div>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <a href="/shop" className="btn-primary">
                        <span>Shop Collection</span>
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
