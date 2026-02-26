import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/horizontal-scroll.css';

const HorizontalProductScroll = ({ title, products }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (!products || products.length === 0) return null;

    return (
        <section className="h-scroll-section container">
            <div className="h-scroll-header">
                <h2>{title}</h2>
                <div className="h-scroll-controls">
                    <button className="h-scroll-btn" onClick={() => scroll('left')}>
                        <ChevronLeft size={20} />
                    </button>
                    <button className="h-scroll-btn" onClick={() => scroll('right')}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="h-scroll-track" ref={scrollRef}>
                {products.map((product) => (
                    <div key={product.id} className="h-scroll-item">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HorizontalProductScroll;
