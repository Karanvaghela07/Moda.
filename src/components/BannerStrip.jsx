import React from 'react';
import '../styles/home.css';

const BannerStrip = () => {
    // A premium, endless scrolling marquee
    return (
        <div className="premium-marquee-container">
            <div className="premium-marquee-track">
                {/* Duplicate content to create seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="premium-marquee-content">
                        <span>FREE WORLDWIDE SHIPPING</span>
                        <span className="marquee-dot">•</span>
                        <span>NEW ARRIVALS EVERY WEEK</span>
                        <span className="marquee-dot">•</span>
                        <span>SECURE PAYMENTS</span>
                        <span className="marquee-dot">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerStrip;
