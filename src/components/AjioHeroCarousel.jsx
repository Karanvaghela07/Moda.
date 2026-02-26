import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AjioHeroCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', maxHeight: '600px', overflow: 'hidden', background: '#e0e0e0', cursor: 'pointer' }}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={slides[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    alt={`Promo Banner ${currentIndex + 1}`}
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} style={{ position: 'absolute', left: '2%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 10 }}>
                <ChevronLeft size={24} color="#333" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} style={{ position: 'absolute', right: '2%', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 10 }}>
                <ChevronRight size={24} color="#333" />
            </button>

            {/* Dots */}
            <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        style={{
                            width: idx === currentIndex ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                            border: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AjioHeroCarousel;
