import React from 'react';
import '../styles/bespoke.css';

const KidsCategoryBubbles = () => {
    const categories = [
        { name: "Boys", img: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=400&auto=format&fit=crop" },
        { name: "Girls", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop" },
        { name: "Infants", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=400&auto=format&fit=crop" },
        { name: "Shoes", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=400&auto=format&fit=crop" },
        { name: "Toys", img: "https://images.unsplash.com/photo-1558066118-fa4782014c2b?q=80&w=400&auto=format&fit=crop" }
    ];

    return (
        <section className="kids-bubbles-container">
            <h2 className="kids-bubbles-title">EXPLORE BY CATEGORY</h2>
            <div className="kids-bubbles-track">
                {categories.map((cat, idx) => (
                    <a href="#grid" key={idx} className="kids-bubble-item">
                        <div className="kids-bubble-circle" style={{ backgroundImage: `url('${cat.img}')` }}></div>
                        <span className="kids-bubble-name">{cat.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default KidsCategoryBubbles;
