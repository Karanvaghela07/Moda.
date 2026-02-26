import React from 'react';
import '../styles/ajio-promos.css';

const defaultDeals = [
    {
        img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=600&auto=format&fit=crop",
        title: "PREMIUM DENIM",
        offer: "MIN. 50% OFF",
        color: "#e11b23"
    },
    {
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        title: "URBAN STREETWEAR",
        offer: "UNDER ₹1999",
        color: "#183a6b"
    },
    {
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
        title: "SNEAKER DROPS",
        offer: "FLAT 40% OFF",
        color: "#d4a017"
    },
    {
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
        title: "WOMEN'S ETHNIC",
        offer: "BUY 1 GET 1",
        color: "#8e3a59"
    }
];

const AjioDealGrid = ({ title = "MEGA BLOCKBUSTER DEALS", deals = defaultDeals }) => {
    return (
        <section className="ajio-deal-section container">
            <h2 className="ajio-section-header">{title}</h2>
            <div className="ajio-deal-grid">
                {deals.map((deal, idx) => (
                    <a href="/shop" className="ajio-deal-card" key={idx}>
                        <div className="ajio-img-box">
                            <img src={deal.img} alt={deal.title} loading="lazy" />
                        </div>
                        <div className="ajio-deal-info" style={{ backgroundColor: deal.color }}>
                            <h3>{deal.title}</h3>
                            <div className="deal-offer-badge">{deal.offer}</div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default AjioDealGrid;
