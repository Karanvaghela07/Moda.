import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const defaultCategories = [
    { name: "Men", img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=300&h=300&fit=crop", link: "/men" },
    { name: "Women", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&h=300&fit=crop", link: "/women" },
    { name: "Kids", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=300&h=300&fit=crop", link: "/kids" },
    { name: "Sneakers", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&h=300&fit=crop", link: "/discover" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=300&h=300&fit=crop", link: "/discover" },
    { name: "Sale", img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=300&h=300&fit=crop", link: "/discover" },
];

const CategoryCircles = ({ categories = defaultCategories }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
    };

    return (
        <section className="premium-category-section container">
            <motion.div
                className="premium-category-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {categories.map((cat, index) => (
                    <Link to={cat.link} key={index} className="premium-cat-link">
                        <motion.div className="premium-cat-item" variants={itemVariants}>
                            <div className="premium-cat-img-wrapper">
                                <img src={cat.img} alt={cat.name} loading="lazy" />
                                <div className="premium-cat-overlay"></div>
                            </div>
                            <span className="premium-cat-name">{cat.name}</span>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </section>
    );
};

export default CategoryCircles;
