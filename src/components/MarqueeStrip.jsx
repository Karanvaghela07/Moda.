import React from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';

const MarqueeStrip = () => {
    return (
        <div className="marquee-container">
            <motion.div
                className="marquee-track"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {/* Repeated text for seamless loop */}
                <span>SILENT LUXURY — NEW YORK — 2026 — </span>
                <span>SILENT LUXURY — NEW YORK — 2026 — </span>
                <span>SILENT LUXURY — NEW YORK — 2026 — </span>
                <span>SILENT LUXURY — NEW YORK — 2026 — </span>
            </motion.div>
        </div>
    );
};

export default MarqueeStrip;
