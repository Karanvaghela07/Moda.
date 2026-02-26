import React from 'react';
import '../styles/bespoke.css';

const WomenLookbook = () => {
    const looks = [
        { name: "THE CITY CHIC", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", details: "3 items • Shop Look" },
        { name: "EVENING ELEGANCE", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop", details: "2 items • Shop Look" },
        { name: "WEEKEND GETAWAY", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop", details: "4 items • Shop Look" },
        { name: "OFFICE ESSENTIALS", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop", details: "3 items • Shop Look" }
    ];

    return (
        <section className="women-lookbook-container">
            <h2 className="women-lookbook-header">CURATED LOOKBOOK</h2>
            <div className="women-lookbook-scroll">
                {looks.map((look, idx) => (
                    <div className="women-lookbook-item" key={idx}>
                        <img src={look.img} alt={look.name} loading="lazy" />
                        <div className="women-lookbook-info">
                            <strong>{look.name}</strong>
                            <a href="#grid" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>{look.details}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WomenLookbook;
