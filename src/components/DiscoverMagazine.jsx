import React from 'react';
import '../styles/bespoke.css';

const DiscoverMagazine = () => {
    const articles = [
        {
            tag: "BEAUTY",
            title: "The Art of Scent: Finding Your Signature",
            link: "READ THE EDITORIAL",
            img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            reverse: false
        },
        {
            tag: "LIFESTYLE",
            title: "Minimalist Carry: The Only Bags You Need",
            link: "SHOP THE COLLECTION",
            img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
            reverse: true
        }
    ];

    return (
        <section className="dsc-magazine-container">
            <h2 className="dsc-polaroids-header" style={{ marginBottom: '3rem' }}>LATEST STORIES</h2>
            <div className="dsc-magazine-grid">
                {articles.map((article, idx) => (
                    <div key={idx} className={`dsc-magazine-block ${article.reverse ? 'reverse' : ''}`}>
                        <div className="dsc-magazine-img" style={{ backgroundImage: `url(${article.img})` }}></div>
                        <div className="dsc-magazine-text">
                            <span className="dsc-magazine-tag">{article.tag}</span>
                            <h3 className="dsc-magazine-title">{article.title}</h3>
                            <a href="#grid" className="dsc-magazine-link">{article.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DiscoverMagazine;
