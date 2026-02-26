import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bespoke.css';

const CATEGORIES = [
    'Dresses', 'Tops', 'Kurtas', 'Sarees',
    'Jeans', 'Activewear', 'Heels', 'Jewellery',
];

const WomenEditorialHero = () => (
    <div className="mnh-root">
        {/* ── Promo ticker bar ─────────────────────────────── */}
        <div className="mnh-ticker" style={{ background: '#e11b23' }}>
            <span>✨ THE WEDDING STORE IS OPEN</span>
            <span className="mnh-ticker-dot">•</span>
            <span>FLAT 50% OFF ON ETHNIC WEAR</span>
            <span className="mnh-ticker-dot">•</span>
            <span>USE CODE <strong>GLAM26</strong></span>
        </div>

        {/* ── Main hero banner ─────────────────────────────── */}
        <div className="mnh-hero">
            {/* Left text panel */}
            <div className="mnh-hero-text">
                <p className="mnh-hero-season" style={{ color: '#e11b23' }}>SPRING GLAMOUR 2026</p>
                <h1 className="mnh-hero-title">
                    Own your<br />
                    <span className="mnh-hero-title-red" style={{ color: '#e11b23' }}>Narrative.</span>
                </h1>
                <p className="mnh-hero-sub">
                    From power suits to statement dresses — discover pieces
                    that celebrate every facet of you.
                </p>
                <div className="mnh-hero-actions">
                    <a href="#grid" className="mnh-btn-shop">Shop Women's</a>
                    <a href="#trending" className="mnh-btn-ghost">Bestsellers →</a>
                </div>

                <div className="mnh-trust-pills">
                    <span>✓ Trend Alert</span>
                    <span>✓ Size Inclusive</span>
                    <span>✓ Easy Returns</span>
                </div>
            </div>

            {/* Right image panel */}
            <div className="mnh-hero-images">
                <div
                    className="mnh-hero-img-main"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop')` }}
                >
                    <div className="mnh-hero-img-badge">HOT RIGHT NOW</div>
                </div>
                <div className="mnh-hero-img-col">
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Dresses</div>
                    </div>
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177f0543f14?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Workwear</div>
                    </div>
                </div>
            </div>
        </div>

        {/* ── Category chips ───────────────────────────────── */}
        <div className="mnh-cats">
            <p className="mnh-cats-label" style={{ color: '#e11b23' }}>SHOP BY CATEGORY</p>
            <div className="mnh-cats-row">
                {CATEGORIES.map((cat, i) => (
                    <motion.a
                        key={cat}
                        href="#grid"
                        className="mnh-cat-chip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                    >
                        {cat}
                    </motion.a>
                ))}
            </div>
        </div>
    </div>
);

export default WomenEditorialHero;
