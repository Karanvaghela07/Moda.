import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumProductCard from '../components/PremiumProductCard';
import WomenMaisonHero from '../components/WomenMaisonHero';
import { products } from '../data/products';
import { Filter, X, ChevronDown } from 'lucide-react';
import '../styles/shop.css';
import '../styles/ajio-promos.css';

const Women = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(1000);
    const [selectedSize, setSelectedSize] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const categoriesList = ['All', 'Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Footwear'];
    const sizes = ['XS', 'S', 'M', 'L'];

    useEffect(() => {
        let result = products.filter(p => p.id % 2 === 0).slice(0, 12); // Base Women's products filter

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.name.toLowerCase().includes(selectedCategory.toLowerCase()) || p.category.toLowerCase().includes(selectedCategory.toLowerCase()));
        }

        result = result.filter(p => p.price <= priceRange);

        if (sortBy === 'price-low') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(result);
    }, [selectedCategory, priceRange, selectedSize, sortBy]);

    return (
        <div className="shop-page-standard" style={{ backgroundColor: '#fff' }}>

            <WomenMaisonHero />

            {/* Standard Ecommerce Scroll Area */}
            <div className="container" id="grid" style={{ paddingTop: '2rem' }}>
                <h2 className="ajio-section-header" style={{ textAlign: 'left', margin: '0 0 2rem' }}>EXPLORE ALL CATALOG</h2>
            </div>

            {/* Split Layout Container */}
            <div className="ecommerce-layout">

                {/* Left Sidebar Filters */}
                <aside className={`ecommerce-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
                    <div className="filter-group">
                        <h3 className="filter-title">Categories</h3>
                        <ul className="filter-list">
                            {categoriesList.map((item) => (
                                <li key={item}>
                                    <label className="filter-label">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="filter-checkbox"
                                            checked={selectedCategory === item}
                                            onChange={() => setSelectedCategory(item)}
                                        />
                                        {item}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Max Price: ₹{priceRange * 80}</h3>
                        <input
                            type="range"
                            className="sidebar-range"
                            min="0"
                            max="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span className="price-display">₹0</span>
                            <span className="price-display">₹80,000</span>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Size</h3>
                        <div className="sidebar-size-grid">
                            {sizes.map(s => (
                                <button
                                    key={s}
                                    className={`sidebar-size-btn ${selectedSize === s ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(s === selectedSize ? '' : s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="ecommerce-main">
                    {/* Top Action Bar */}
                    <div className="ecommerce-top-bar">
                        <div className="results-count">
                            Showing {filteredProducts.length} results
                        </div>

                        <div className="sort-container">
                            <button
                                className="mobile-filter-btn"
                                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                            >
                                {isMobileFilterOpen ? <X size={18} /> : <Filter size={18} />}
                                {isMobileFilterOpen ? 'Close Filters' : 'Filters'}
                            </button>

                            <label className="sort-label">Sort by:</label>
                            <select
                                className="ecommerce-sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="default">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="standard-product-grid">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <PremiumProductCard product={product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="no-products-message">
                            <h3>No items found matching your criteria</h3>
                            <button
                                className="clear-btn"
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setPriceRange(1000);
                                    setSelectedSize('');
                                    setSortBy('default');
                                }}
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Women;
