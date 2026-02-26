import React from 'react';
import '../styles/ajio-promos.css';

const defaultBrands = [
    { name: "PUMA", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=200&auto=format&fit=crop" },
    { name: "LEVI'S", img: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=200&auto=format&fit=crop" },
    { name: "ADIDAS", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=200&auto=format&fit=crop" },
    { name: "NIKE", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" },
    { name: "VERO MODA", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop" },
    { name: "ONLY", img: "https://images.unsplash.com/photo-1509631179647-0c708c22a713?q=80&w=200&auto=format&fit=crop" }
];

const AjioBrandSpotlight = ({ title = "TOP BRANDS IN FOCUS", brands = defaultBrands }) => {
    return (
        <section className="ajio-brand-section container">
            <h2 className="ajio-section-header">{title}</h2>
            <div className="ajio-brand-grid">
                {brands.map((brand, idx) => (
                    <div className="ajio-brand-card" key={idx}>
                        <div className="brand-img-wrapper">
                            <img src={brand.img} alt={brand.name} loading="lazy" />
                        </div>
                        <div className="brand-offer">MIN 40% OFF</div>
                        <div className="brand-name">{brand.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AjioBrandSpotlight;
