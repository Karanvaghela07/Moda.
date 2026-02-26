import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import '../styles/home.css';

const JournalGrid = () => {
    const articles = [
        {
            category: "CAMPAIGN",
            title: "SHADOWS OF TOKYO",
            img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
            size: "tall"
        },
        {
            category: "MATERIAL",
            title: "RAW SILK ORIGINS",
            img: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=1200",
            size: "wide"
        },
        {
            category: "INTERVIEW",
            title: "THE ARCHITECT",
            img: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1200",
            size: "square"
        }
    ];

    return (
        <section className="journal-section">
            <div className="journal-header">
                <h3>THE JOURNAL</h3>
                <button>READ ALL <ArrowUpRight size={16} /></button>
            </div>
            <div className="journal-grid">
                {articles.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`journal-card ${item.size}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="journal-img-wrapper">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="journal-info">
                            <span>{item.category}</span>
                            <h4>{item.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default JournalGrid;
