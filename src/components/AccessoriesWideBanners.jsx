import React from 'react';
import '../styles/bespoke.css';

const AccessoriesWideBanners = () => {
    const banners = [
        {
            title: "PREMIUM CHRONOGRAPHS",
            action: "DISCOVER",
            img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "LUXURY LEATHER GOODS",
            action: "SHOP NOW",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="asc-wide-container">
            {banners.map((banner, idx) => (
                <div key={idx} className="asc-wide-banner" style={{ backgroundImage: `url(${banner.img})` }}>
                    <div className="asc-wide-banner-overlay"></div>
                    <div className="asc-wide-banner-content">
                        <h2 className="asc-wide-banner-title">{banner.title}</h2>
                        <a href="#grid" className="asc-wide-banner-action">{banner.action}</a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AccessoriesWideBanners;
