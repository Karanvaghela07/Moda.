import React from 'react';
import '../styles/bespoke.css';

const KidsDealGrid = () => {
    const deals = [
        { title: "LITTLE CHAMPIONS", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop", offer: "UNDER ₹799", color: "#183a6b" },
        { title: "PARTY PRINCESS", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", offer: "MIN 50% OFF", color: "#e11b23" },
        { title: "WINTER WARMERS", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop", offer: "FLAT 40% OFF", color: "#d19a22" },
        { title: "SNEAKER SQUAD", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop", offer: "BUY 2 GET 1", color: "#222" }
    ];

    return (
        <section className="kids-deal-container">
            <h2 className="kids-bubbles-title" style={{ marginBottom: '2rem' }}>FESTIVAL DEALS</h2>
            <div className="kids-deal-grid">
                {deals.map((deal, idx) => (
                    <div className="kids-deal-card" key={idx} style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${deal.img})` }}>
                        <div className="kids-deal-badge" style={{ background: deal.color }}>{deal.offer}</div>
                        <h3 className="kids-deal-title">{deal.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KidsDealGrid;
