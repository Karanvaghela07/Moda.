import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/home-editorial.css';

const HomeEditorial = () => {
    return (
        <section className="home-editorial-section container">
            <div className="home-editorial-grid">

                {/* Visual Side */}
                <div className="editorial-visual">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="Editorial Campaign" loading="lazy" />
                    <motion.div
                        className="editorial-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        THE JOURNAL
                    </motion.div>
                </div>

                {/* Text Side */}
                <div className="editorial-text-content">
                    <span className="editorial-subtitle">DESIGN PHILOSOPHY</span>
                    <h2 className="editorial-title">Mastering The Art of Minimalist Tailoring</h2>
                    <p className="editorial-desc">
                        Explore our latest editorial diving deep into the fabrics, cuts, and inspirations that shaped our current collection. We visited the Italian mills where our linens are spun to understand the true meaning of quality craftsmanship.
                    </p>
                    <Link to="/journal" className="editorial-btn">READ THE STORY</Link>
                </div>

            </div>
        </section>
    );
};

export default HomeEditorial;
