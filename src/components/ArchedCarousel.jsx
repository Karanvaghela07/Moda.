import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/arched-carousel.css';

const ArchedCarousel = ({ cards }) => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(2);

    const nextCard = () => setActiveIndex((prev) => (prev + 1) % cards.length);
    const prevCard = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

    const getCardStyle = (index) => {
        const diff = (index - activeIndex + cards.length) % cards.length;
        let offset = diff;
        if (offset > 3) offset -= cards.length;

        const xBase = offset * 55;
        const yCurve = Math.pow(Math.abs(offset), 2) * 8;

        return {
            x: `calc(${xBase}% - 50%)`,
            y: `${yCurve}%`,
            zIndex: 10 - Math.abs(offset),
            scale: 1 - Math.abs(offset) * 0.15,
            rotate: offset * 15,
            opacity: Math.abs(offset) > 2 ? 0 : 1,
            filter: `grayscale(${Math.abs(offset) * 25}%)`,
            transition: {
                type: "spring",
                stiffness: 85,
                damping: 22,
                mass: 1
            }
        };
    };

    return (
        <div className="arched-carousel-section">
            <div className="start-cards-container">
                <button className="nav-arrow left" onClick={prevCard}>
                    <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} />
                </button>

                <button className="nav-arrow right" onClick={nextCard}>
                    <ArrowRight size={24} />
                </button>

                <div className="chicx-card-row">
                    {cards.map((item, i) => (
                        <motion.div
                            key={i}
                            className="arched-card"
                            animate={getCardStyle(i)}
                            onClick={() => {
                                if (i === activeIndex) navigate('/shop');
                                else setActiveIndex(i);
                            }}
                        >
                            <img src={item.img} alt={`Fashion ${i}`} />
                            <div className="card-price-overlay">
                                <div className="overlay-thumb">
                                    <img src={item.img} alt="Thumb" />
                                </div>
                                <div className="price-info-stack">
                                    <span className="price-label">Price for all</span>
                                    <span className="price-value">{item.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchedCarousel;
