import React from 'react';
import '../styles/bespoke.css';

const DiscoverPolaroids = () => {
    const snaps = [
        { caption: "Summer Shades", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop" },
        { caption: "Daily Details", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop" },
        { caption: "Night Out", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop" },
        { caption: "Weekend Bags", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop" }
    ];

    return (
        <section className="dsc-polaroids-container">
            <h2 className="dsc-polaroids-header">THE EDITORIAL CURATION</h2>
            <div className="dsc-polaroids-track">
                {snaps.map((snap, idx) => (
                    <a href="#grid" key={idx} className="dsc-polaroid">
                        <div className="dsc-polaroid-img" style={{ backgroundImage: `url(${snap.img})` }}></div>
                        <p className="dsc-polaroid-caption">{snap.caption}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default DiscoverPolaroids;
