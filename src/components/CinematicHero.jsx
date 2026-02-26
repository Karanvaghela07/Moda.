import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import '../styles/home.css'; // We will style it in home.css or a new file

const CinematicHero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for the background
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="cinematic-hero" ref={containerRef}>
            <motion.div
                className="hero-bg-wrapper"
                style={{ y }}
            >
                {/* High-End Editorial Image (Reliable & Premium) */}
                <motion.img
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                    alt="Cinematic Fashion Hero"
                    className="hero-image-static"
                />
                <div className="hero-overlay"></div>
            </motion.div>

            <motion.div
                className="hero-interface"
                style={{ opacity }}
            >
                {/* NO BRAND NAME - JUST PURE AESTHETIC */}

                <div className="minimal-enter" onClick={scrollToContent}>
                    <span>ENTER COLLECTION</span>
                    <ArrowDown size={20} className="scroll-arrow" />
                </div>
            </motion.div>
        </div>
    );
};

export default CinematicHero;
