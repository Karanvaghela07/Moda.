import React from 'react';
import '../styles/bespoke.css';

const categories = ["T-Shirts", "Denims", "Outerwear", "Sneakers", "Accessories", "Activewear", "Grooming", "Essentials"];

const MenCategoryPills = () => {
    return (
        <div className="men-category-pills-container">
            <h3 className="men-pills-header">SHOP BY CATEGORY</h3>
            <div className="men-pills-scroll">
                {categories.map((cat, idx) => (
                    <a href="#grid" key={idx} className="men-pill-item">{cat}</a>
                ))}
            </div>
        </div>
    );
};

export default MenCategoryPills;
