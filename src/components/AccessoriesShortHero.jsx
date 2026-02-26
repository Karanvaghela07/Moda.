import React from 'react';
import '../styles/bespoke.css';

const AccessoriesShortHero = () => {
    return (
        <section className="asc-short-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2000&auto=format&fit=crop')` }}>
            <div className="asc-short-hero-overlay"></div>
            <div className="asc-short-hero-content">
                <h1 className="asc-short-hero-title">THE DETAILS</h1>
                <p className="asc-short-hero-subtitle">Elevate Your Everyday Essentials</p>
            </div>
        </section>
    );
};

export default AccessoriesShortHero;
