import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/lookbook.css';

const Lookbook = () => {
    return (
        <section className="lookbook-section">
            <div className="lookbook-grid">
                <motion.div
                    className="lookbook-item item-1"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop" alt="Editorial 1" />
                    <div className="lb-caption">
                        <h3>Urban <br /> Solitude</h3>
                        <p>Spring / Summer 2026</p>
                    </div>
                </motion.div>

                <motion.div
                    className="lookbook-item item-2"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop" alt="Editorial 2" />
                    <div className="lb-caption">
                        <h3>Monochrome <br /> Essence</h3>
                    </div>
                </motion.div>
            </div>

            <div className="lookbook-text">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    "Fashion is the armor to survive the reality of everyday life."
                </motion.h2>
            </div>
        </section>
    );
};

export default Lookbook;
