import React from 'react';
import '../styles/bespoke.css';

const brands = ["CARHARTT", "SUPERDRY", "VANS", "TIMBERLAND", "DIESEL", "POLO"];

const MenBrandMarquee = () => {
    return (
        <div className="men-brand-marquee">
            <div className="marquee-track">
                {/* Need 4 copies of the array to make seamless scrolling work correctly */}
                {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
                    <span key={idx} className="marquee-item">{brand}</span>
                ))}
            </div>
        </div>
    );
};

export default MenBrandMarquee;
