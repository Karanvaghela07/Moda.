import React from 'react';
import '../styles/ajio-promos.css';

const AjioMasonryGrid = ({ title = "HOT DISCOVERIES", items }) => {
    // items should be an array of exactly 3 or 4 objects
    return (
        <section className="ajio-masonry-section container">
            <h2 className="ajio-section-header" style={{ textAlign: 'center', margin: '3rem 0 2rem' }}>{title}</h2>
            <div className="ajio-masonry-wrapper">
                {items.map((item, idx) => (
                    <div key={idx} className={`masonry-item item-${idx + 1}`} style={{ backgroundImage: `url(${item.img})` }}>
                        <div className="masonry-overlay" style={{ background: item.overlayColor || 'rgba(0,0,0,0.4)' }}>
                            <h3 className="masonry-title">{item.title}</h3>
                            <span className="masonry-offer">{item.offer}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AjioMasonryGrid;
