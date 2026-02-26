import React from 'react';
import '../styles/bespoke.css';

/* Always use reliable fallback URLs — don't depend on dynamic product images */
const PROMO_ITEMS = [
    {
        type: 'large',
        img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1600&auto=format&fit=crop',
        title: 'DENIM VAULT',
        sub: null,
        cta: 'EXPLORE NOW',
        ctaHref: '#grid',
    },
    {
        type: 'small',
        img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=900&auto=format&fit=crop',
        title: null,
        subtitle: 'GRAPHIC TEES',
        sub: 'MIN 30% OFF',
    },
    {
        type: 'small',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop',
        title: null,
        subtitle: 'FOOTWEAR',
        sub: 'NEW ARRIVALS',
    },
];

const MenPromoGrid = () => (
    <div className="men-promo-grid-container">
        <div className="men-promo-grid">
            {/* Large left panel */}
            <div
                className="men-promo-large"
                style={{ backgroundImage: `url('${PROMO_ITEMS[0].img}')` }}
            >
                <div className="men-promo-overlay">
                    <h2>{PROMO_ITEMS[0].title}</h2>
                    <a href={PROMO_ITEMS[0].ctaHref}>{PROMO_ITEMS[0].cta}</a>
                </div>
            </div>

            {/* Top-right small panel */}
            <div
                className="men-promo-small"
                style={{ backgroundImage: `url('${PROMO_ITEMS[1].img}')` }}
            >
                <div className="men-promo-overlay">
                    <h3>{PROMO_ITEMS[1].subtitle}</h3>
                    <p>{PROMO_ITEMS[1].sub}</p>
                </div>
            </div>

            {/* Bottom-right small panel */}
            <div
                className="men-promo-small"
                style={{ backgroundImage: `url('${PROMO_ITEMS[2].img}')` }}
            >
                <div className="men-promo-overlay">
                    <h3>{PROMO_ITEMS[2].subtitle}</h3>
                    <p>{PROMO_ITEMS[2].sub}</p>
                </div>
            </div>
        </div>
    </div>
);

export default MenPromoGrid;
