import React from 'react';
import '../styles/bespoke.css';

const WomenBrandCircles = () => {
    const brands = [
        { name: "STREETWEAR", img: "https://images.unsplash.com/photo-1550614000-4b95d4ebfa4b?q=80&w=400&auto=format&fit=crop" },
        { name: "LUXURY", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop" },
        { name: "ATHLEISURE", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop" },
        { name: "VINTAGE", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" },
        { name: "MINIMAL", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop" },
        { name: "PARTY", img: "https://images.unsplash.com/photo-1529139574466-a303027c02b1?q=80&w=400&auto=format&fit=crop" }
    ];

    return (
        <section className="women-brand-circles">
            <div className="women-brand-grid">
                {brands.map((brand, idx) => (
                    <a href="#grid" className="women-brand-item" key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="women-brand-img">
                            <img src={brand.img} alt={brand.name} loading="lazy" />
                        </div>
                        <div className="women-brand-name">{brand.name}</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default WomenBrandCircles;
