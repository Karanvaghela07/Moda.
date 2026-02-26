import React from 'react';
import '../styles/bespoke.css';

const AccessoriesTextList = () => {
    const list = [
        { title: "WATCHES", count: "124 ITEMS", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop" },
        { title: "BAGS & TOTES", count: "89 ITEMS", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400&auto=format&fit=crop" },
        { title: "SUNGLASSES", count: "56 ITEMS", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop" },
        { title: "JEWELRY", count: "210 ITEMS", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=400&auto=format&fit=crop" },
        { title: "BELTS", count: "45 ITEMS", img: "https://images.unsplash.com/photo-1624223359990-8c0a31396e28?q=80&w=400&auto=format&fit=crop" }
    ];

    return (
        <section className="asc-text-list-container">
            {list.map((item, idx) => (
                <a href="#grid" key={idx} className="asc-text-list-item">
                    <h2 className="asc-text-list-title">{item.title}</h2>
                    <img src={item.img} alt={item.title} className="asc-text-list-hover-img" loading="lazy" />
                    <span className="asc-text-list-count">{item.count}</span>
                </a>
            ))}
        </section>
    );
};

export default AccessoriesTextList;
