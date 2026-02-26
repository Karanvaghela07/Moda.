import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowDownRight } from 'lucide-react';
import '../styles/home.css';

const VideoHero = () => {
    const { scrollY } = useScroll();

    // Parallax effects
    const leftTextY = useTransform(scrollY, [0, 500], [0, -100]);
    const rightTextY = useTransform(scrollY, [0, 500], [0, 100]);
    const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div className="dribbble-hero-container">
            {/* LEFT GIANT TEXT */}
            <motion.div className="hero-col left" style={{ y: leftTextY }}>
                <h1 className="giant-vertical">SILENT</h1>
                <div className="hero-meta-box">
                    <span>EST. 2026</span>
                    <span>NEW YORK</span>
                </div>
            </motion.div>

            {/* CENTER VIDEO STAGE */}
            <motion.div className="hero-col center" style={{ scale: videoScale }}>
                <div className="video-frame">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="center-video"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39899-large.mp4" type="video/mp4" />
                        <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200" alt="Fashion Model" />
                    </video>
                    <div className="video-frame-overlay">
                        <div className="play-btn-circle">
                            <Play size={20} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT GIANT TEXT */}
            <motion.div className="hero-col right" style={{ y: rightTextY }}>
                <h1 className="giant-vertical outline">LUXURY</h1>
                <div className="hero-cta-box">
                    <span>DISCOVER</span>
                    <ArrowDownRight size={24} />
                </div>
            </motion.div>

            {/* ABSOLUTE BACKGROUND ELEMENTS */}
            <div className="hero-bg-accent"></div>
        </div>
    );
};

export default VideoHero;
