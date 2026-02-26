import React from 'react';
import '../styles/bespoke.css';

const KidsLogoWall = () => {
    const brands = [
        { name: "MOTHERCARE", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=200&auto=format&fit=crop" },
        { name: "GAP KIDS", img: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=200&auto=format&fit=crop" },
        { name: "ALLEN SOLLY", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&auto=format&fit=crop" },
        { name: "UNITED COLORS", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=200&auto=format&fit=crop" },
        { name: "RUFF", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=200&auto=format&fit=crop" },
        { name: "PEPE JEANS", img: "https://images.unsplash.com/photo-1485546246426-d64df9d20df4?q=80&w=200&auto=format&fit=crop" }
    ];

    return (
        <section className="kids-logo-wall">
            <h2 className="kids-bubbles-title" style={{ marginBottom: 0 }}>FAVORITE BRANDS</h2>
            <div className="kids-logo-grid">
                {brands.map((brand, idx) => (
                    <a href="#grid" className="kids-logo-item" key={idx}>
                        <img src={brand.img} alt={brand.name} loading="lazy" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default KidsLogoWall;
