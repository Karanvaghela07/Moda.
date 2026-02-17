import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/collections.css';

// UNIQUE IMAGE SET - Verified working and on-theme
const collections = [
    {
        id: 1,
        title: "Summer 2026",
        subtitle: "The heatwave essential edit.",
        image: "https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=2026&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Urban Minimalist",
        subtitle: "Clean lines for the concrete jungle.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1962&auto=format&fit=crop",
        size: "tall"
    },
    {
        id: 3,
        title: "Evening Noir",
        subtitle: "Elegance in the shadows.",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
        size: "wide"
    },
    {
        id: 4,
        title: "Accessories",
        subtitle: "The finishing touches.",
        image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=2070&auto=format&fit=crop", // Dark background Accessories
        size: "small"
    },
    {
        id: 5,
        title: "Denim Redux",
        subtitle: "Timeless fabric, modern cuts.",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
        size: "tall"
    },
    {
        id: 6,
        title: "Avant Garde",
        subtitle: "Pushing boundaries.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 7,
        title: "Monochrome",
        subtitle: "The power of one.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 8,
        title: "Sport Luxe",
        subtitle: "Performance meets style.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
        size: "wide"
    },
    {
        id: 9,
        title: "Streetwear Edits",
        subtitle: "Bold graphics, loose fits.",
        image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop",
        size: "tall"
    },
    {
        id: 10,
        title: "Office Chic",
        subtitle: "Power dressing for the modern workplace.",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 11,
        title: "Weekend Getaway",
        subtitle: "Relaxed essentials for travel.",
        image: "https://images.unsplash.com/photo-1539656825636-a361b58071aa?q=80&w=2000&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 12,
        title: "Techwear",
        subtitle: "Functionality meets futurism.",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop",
        size: "wide"
    }
];

const Collections = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <div className="collections-page">
            {/* 1. Hero Section - Full Screen & Centered */}
            <div ref={targetRef} className="collections-hero">
                <div className="hero-bg">
                    {/* NEW: Dark Fashion Editorial Theme */}
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop" alt="Collections Hero" />
                    <div className="hero-overlay"></div>
                </div>

                <motion.div style={{ opacity, scale, y }} className="hero-content">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        ARCHIVE <br /> <span className="hollow-text">2026</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Curated for the modern connoisseur.
                    </motion.p>
                    <motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <span>Scroll to Explore</span>
                        <ArrowDown size={20} />
                    </motion.div>
                </motion.div>
            </div>

            {/* 2. Featured Drop - Split Screen */}
            <div className="featured-drop-section">
                <div className="drop-content">
                    <span className="section-label">Featured Drop</span>
                    <h2>The Midnight<br />Collection</h2>
                    <p>
                        Inspired by the city after dark. Sharp silhouettes, reflective textures,
                        and a palette of deep obsidian and midnight blue. This is evening wear, redefined.
                    </p>
                    <button className="btn-primary">View Lookbook <ArrowUpRight size={18} /></button>
                </div>
                <div className="drop-image">
                    {/* NEW: High contrast dark fashion shot */}
                    <img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop" alt="Midnight Collection" />
                </div>
            </div>

            {/* 3. The Grid - Bento Style */}
            <div className="container">
                <div className="collections-header-small">
                    <h2>Full Archive</h2>
                    <div className="collection-filters">
                        <span className="active">All</span>
                        <span>Editorial</span>
                        <span>Streetwear</span>
                        <span>Summer</span>
                        <span>Accessories</span>
                    </div>
                </div>

                <div className="collections-grid">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            className={`collection-card ${collection.size}`}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="img-container">
                                <img src={collection.image} alt={collection.title} />
                                <div className="collection-hover-overlay">
                                    <span className="explore-btn">Explore</span>
                                </div>
                            </div>
                            <div className="collection-info">
                                <h2>{collection.title}</h2>
                                <p>{collection.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Collections;
