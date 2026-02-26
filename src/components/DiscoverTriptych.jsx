import React from 'react';
import '../styles/bespoke.css';

const DiscoverTriptych = () => {
    const panels = [
        { title: "SCENT", desc: "Signature Fragrances", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" },
        { title: "ADORN", desc: "Fine Jewelry & Watches", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop" },
        { title: "CARRY", desc: "Premium Leather Goods", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <section className="dsc-triptych-container">
            {panels.map((panel, idx) => (
                <div key={idx} className="dsc-triptych-panel" style={{ backgroundImage: `url(${panel.img})` }} onClick={() => document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className="dsc-triptych-overlay">
                        <h2 className="dsc-triptych-title">{panel.title}</h2>
                        <p className="dsc-triptych-desc">{panel.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DiscoverTriptych;
