import React from 'react';
import '../styles/bespoke.css';

const WomenPortraitCards = () => {
    const cards = [
        { title: "DRESSES", img: "https://images.unsplash.com/photo-1515347619152-16e4544e41ea?q=80&w=800&auto=format&fit=crop" },
        { title: "TOPS", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop" },
        { title: "OUTERWEAR", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop" },
        { title: "ACCESSORIES", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <section className="women-portrait-container">
            <h2 className="women-lookbook-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>SHOP BY CATEGORY</h2>
            <div className="women-portrait-grid">
                {cards.map((card, idx) => (
                    <a href="#grid" key={idx} className="women-portrait-card">
                        <div className="women-portrait-img">
                            <img src={card.img} alt={card.title} loading="lazy" />
                        </div>
                        <h3 className="women-portrait-title">{card.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default WomenPortraitCards;
