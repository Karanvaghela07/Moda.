import React from 'react';
import '../styles/ajio-promos.css';

const AjioCategorySquares = ({ categories }) => {
    return (
        <section className="ajio-category-squares container">
            <h2 className="ajio-section-header" style={{ textAlign: 'center', margin: '2rem 0' }}>SHOP BY CATEGORY</h2>
            <div className="category-squares-grid">
                {categories.map((cat, idx) => (
                    <a href={cat.link} key={idx} className="category-square-card">
                        <div className="square-img-wrapper">
                            <img src={cat.img} alt={cat.name} />
                        </div>
                        <h3 className="square-title">{cat.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default AjioCategorySquares;
