import React from 'react';
import { motion } from 'framer-motion';
import '../styles/bespoke.css';

const CATEGORIES = [
    'T-Shirts', 'Shirts', 'Jeans', 'Trousers',
    'Jackets', 'Activewear', 'Sneakers', 'Accessories',
];

const MenSplitHero = () => (
    <div className="mnh-root">

        {/* ── Promo ticker bar ─────────────────────────────── */}
        <div className="mnh-ticker">
            <span>NEW ARRIVALS EVERY FRIDAY</span>
            <span className="mnh-ticker-dot">•</span>
            <span>FREE DELIVERY ON ORDERS ABOVE ₹999</span>
            <span className="mnh-ticker-dot">•</span>
            <span>USE CODE <strong>MODA10</strong> FOR 10% OFF</span>
        </div>

        {/* ── Main hero banner ─────────────────────────────── */}
        <div className="mnh-hero">
            {/* Left text panel */}
            <div className="mnh-hero-text">
                <p className="mnh-hero-season">SUMMER / SPRING 2026</p>
                <h1 className="mnh-hero-title">
                    Wear What<br />
                    <span className="mnh-hero-title-red">Defines</span><br />
                    You.
                </h1>
                <p className="mnh-hero-sub">
                    Premium basics, bold drops &amp; everything in between —
                    curated for the modern man.
                </p>
                <div className="mnh-hero-actions">
                    <a href="#grid" className="mnh-btn-shop">Shop Men's</a>
                    <a href="#trending" className="mnh-btn-ghost">New Arrivals →</a>
                </div>

                <div className="mnh-trust-pills">
                    <span>✓ Free Returns</span>
                    <span>✓ 100% Authentic</span>
                    <span>✓ 5-Day Delivery</span>
                </div>
            </div>

            {/* Right image panel */}
            <div className="mnh-hero-images">
                <div
                    className="mnh-hero-img-main"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1400&auto=format&fit=crop')` }}
                >
                    <div className="mnh-hero-img-badge">BESTSELLER</div>
                </div>
                <div className="mnh-hero-img-col">
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Casuals</div>
                    </div>
                    <div
                        className="mnh-hero-img-small"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=800&auto=format&fit=crop')` }}
                    >
                        <div className="mnh-hero-img-label">Smart Look</div>
                    </div>
                </div>
            </div>
        </div>

        {/* ── Category chips — NO emojis, professional text pills ─── */}
        <div className="mnh-cats">
            <p className="mnh-cats-label">SHOP BY CATEGORY</p>
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

export default MenSplitHero;
