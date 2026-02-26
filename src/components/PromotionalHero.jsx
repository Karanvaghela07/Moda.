import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/home.css';

const PromotionalHero = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            id: 1,
            bg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000",
            title: "SUMMER SALE",
            subtitle: "UP TO 50% OFF",
            cta: "SHOP NOW",
            color: "#fff"
        },
        {
            id: 2,
            bg: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2000",
            title: "NEW ARRIVALS",
            subtitle: "STREETWEAR COLLECTION",
            cta: "EXPLORE",
            color: "#fff"
        },
        {
            id: 3,
            bg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000",
            title: "THE DENIM EDIT",
            subtitle: "STARTING AT $29.99",
            cta: "VIEW ALL",
            color: "#fff"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="promo-hero-container">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className="hero-slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className="slide-bg-blur"
                        style={{ backgroundImage: `url(${slides[current].bg})` }}
                    />
                    <img src={slides[current].bg} alt={slides[current].title} className="slide-bg" />
                    <div className="slide-content container">
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {slides[current].subtitle}
                        </motion.h3>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {slides[current].title}
                        </motion.h1>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="hero-cta-btn"
                        >
                            {slides[current].cta} <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="Hero-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromotionalHero;
