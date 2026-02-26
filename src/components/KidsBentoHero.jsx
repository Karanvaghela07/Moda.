import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bespoke.css';

const CATEGORIES = [
    'Boys', 'Girls', 'Infants', 'Toys',
    'T-Shirts', 'Dresses', 'Sneakers', 'Schoolwear',
];

const KidsBentoHero = () => (
    <div className="mnh-root">
        {/* ── Promo ticker bar ─────────────────────────────── */}
        <div className="mnh-ticker" style={{ background: '#f5a623', color: '#111' }}>
            <span>🎈 NEW TOYS ADDED</span>
            <span className="mnh-ticker-dot" style={{ borderColor: '#111' }}>•</span>
            <span>BUY 2 GET 1 FREE ON KIDSWEAR</span>
            <span className="mnh-ticker-dot" style={{ borderColor: '#111' }}>•</span>
            <span>USE CODE <strong>MINI20</strong></span>
        </div>

        {/* ── Main hero banner ─────────────────────────────── */}
        <div className="mnh-hero">
            {/* Left text panel */}
            <div className="mnh-hero-text">
                <p className="mnh-hero-season" style={{ color: '#f5a623' }}>PLAYTIME ESSENTIALS</p>
                <h1 className="mnh-hero-title">
                    Little<br />
                    <span className="mnh-hero-title-red" style={{ color: '#f5a623' }}>Legends.</span>
                </h1>
                <p className="mnh-hero-sub">
                    Comfortable, durable, and stylish clothing designed for
                    their biggest adventures.
                </p>
                <div className="mnh-hero-actions">
                    <a href="#grid" className="mnh-btn-shop">Shop Kids</a>
                    <a href="#trending" className="mnh-btn-ghost">New Arrivals →</a>
                </div>

                <div className="mnh-trust-pills">
                    <span>✓ Skin Friendly</span>
                    <span>✓ Soft Fabrics</span>
                    <span>✓ Easy Wash</span>
                </div>
            </div>

            {/* Right image panel */}
            <div className="mnh-hero-images">
                <div
                    className="mnh-hero-img-main"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1400&auto=format&fit=crop')` }}
                >
                    <div className="mnh-hero-img-badge">BESTSELLER</div>
                </div>
                <div className="mnh-hero-img-col">
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Boys</div>
                    </div>
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518831959646-742c3e14ebf7?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Girls</div>
                    </div>
                </div>
            </div>
        </div>

        {/* ── Category chips ───────────────────────────────── */}
        <div className="mnh-cats">
            <p className="mnh-cats-label" style={{ color: '#f5a623' }}>SHOP BY CATEGORY</p>
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

export default KidsBentoHero;
