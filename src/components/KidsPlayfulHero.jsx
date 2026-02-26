import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bespoke.css';

const KidsPlayfulHero = () => (
    <div className="kph-root">

        {/* Editorial Top Banner */}
        <div className="kph-main-banner" style={{ backgroundColor: '#F8F4E6' }}>
            <div className="kph-banner-text">
                <motion.span
                    className="kph-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    style={{ backgroundColor: '#111', color: '#fff' }}
                >
                    NEW SEASON
                </motion.span>
                <h1 className="kph-title" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: '400' }}>Little<br />Trendsetters</h1>
                <p className="kph-sub" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Fresh drops for the new generation.</p>
                <a href="#grid" className="kph-btn" style={{ borderRadius: '0', backgroundColor: '#111', fontWeight: '500', padding: '1rem 3rem' }}>EXPLORE NOW</a>
            </div>
            <div
                className="kph-banner-img"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1200&auto=format&fit=crop')`, filter: 'contrast(1.1) saturate(1.1)' }}
            />
        </div>

        {/* Sophisticated Magazine Bento Grid */}
        <div className="kph-bento-grid-sexy">

            {/* Visual categories taking up varied spans */}
            <div className="kph-bento-item kph-span-col-2 kph-span-row-2" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop')` }}>
                <div className="kph-bento-overlay kph-overlay-elegant">
                    <h3>Boys Editorial</h3>
                    <a href="#grid" className="kph-editorial-link">Shop Boys →</a>
                </div>
            </div>

            <div className="kph-bento-item kph-span-col-1 kph-span-row-2" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1471286174890-9c112fb10d3e?q=80&w=800&auto=format&fit=crop')` }}>
                <div className="kph-bento-overlay kph-overlay-elegant">
                    <h3>Girls Editorial</h3>
                    <a href="#grid" className="kph-editorial-link">Shop Girls →</a>
                </div>
            </div>

            {/* Typography / Age Blocks */}
            <a href="#grid" className="kph-bento-item kph-bento-age-sexy" style={{ backgroundColor: '#111', color: '#fff' }}>
                <span className="kph-age-num">01</span>
                <h3>BABY</h3>
                <p>0-24 Months</p>
                <div className="kph-bento-arrow-sexy">↗</div>
            </a>

            <a href="#grid" className="kph-bento-item kph-bento-age-sexy" style={{ backgroundColor: '#F0F0F0', color: '#111' }}>
                <span className="kph-age-num">02</span>
                <h3>TODDLER</h3>
                <p>2-5 Years</p>
                <div className="kph-bento-arrow-sexy" style={{ borderColor: '#111', color: '#111' }}>↗</div>
            </a>

            <a href="#grid" className="kph-bento-item kph-bento-age-sexy" style={{ backgroundColor: '#E3DAC9', color: '#111' }}>
                <span className="kph-age-num">03</span>
                <h3>KIDS</h3>
                <p>6-14 Years</p>
                <div className="kph-bento-arrow-sexy" style={{ borderColor: '#111', color: '#111' }}>↗</div>
            </a>

            {/* Changed from Mario to High-end lifestyle kids image */}
            <div className="kph-bento-item kph-span-col-3 kph-span-row-1" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1400&auto=format&fit=crop')`, minHeight: '400px' }}>
                <div className="kph-bento-overlay kph-overlay-elegant kph-overlay-center">
                    <h2>The Playroom Edit</h2>
                    <p style={{ color: '#fff', opacity: 0.9, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.1em', marginBottom: '1.5rem' }}>ELEVATED ESSENTIALS</p>
                    <a href="#grid" className="kph-bento-btn-sexy">DISCOVER</a>
                </div>
            </div>

        </div>

    </div>
);

export default KidsPlayfulHero;
