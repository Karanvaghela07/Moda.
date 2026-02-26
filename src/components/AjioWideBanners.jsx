import React from 'react';
import '../styles/ajio-promos.css';

const AjioWideBanners = ({ banners }) => {
    return (
        <section className="ajio-wide-banners container">
            {banners.map((banner, idx) => (
                <div key={idx} className="wide-banner-card" style={{ marginBottom: '1.5rem', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                    <img src={banner.img} alt={banner.title} style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                    <div className="wide-banner-overlay" style={{ position: 'absolute', inset: 0, background: banner.overlayColor || 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4rem', color: '#fff' }}>
                        <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'Syncopate', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>{banner.title}</h3>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 600, marginTop: '0.5rem', color: '#ffeb3b', letterSpacing: '2px' }}>{banner.offer}</p>
                        <button style={{ marginTop: '2rem', alignSelf: 'flex-start', background: '#fff', color: '#000', border: 'none', padding: '1rem 3rem', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', textTransform: 'uppercase' }}>Shop Now</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AjioWideBanners;
