import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumProductCard from '../components/PremiumProductCard';
import KidsPlayfulHero from '../components/KidsPlayfulHero';
import { products } from '../data/products';
import { Filter, X, ChevronDown } from 'lucide-react';
import '../styles/shop.css';
import '../styles/ajio-promos.css';

const Kids = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(1000);
    const [selectedSize, setSelectedSize] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const categoriesList = ['All', 'Boys', 'Girls', 'Infants', 'Footwear', 'Toys'];
    const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-10Y', '11-12Y'];

    useEffect(() => {
        let result = products.slice().reverse().slice(0, 12); // Base Kids' products filter

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

    // UNIQUE LAYOUT FOR KIDS: CategoryCircles -> DealGrid
    const kidsTopCategories = [
        { name: "Boys", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=300&auto=format&fit=crop", link: "#grid" },
        { name: "Girls", img: "https://images.unsplash.com/photo-1518831959646-742c3e14ebf7?q=80&w=300&auto=format&fit=crop", link: "#grid" },
        { name: "Infants", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=300&auto=format&fit=crop", link: "#grid" },
        { name: "Toys", img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=300&auto=format&fit=crop", link: "#grid" },
        { name: "Footwear", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=300&auto=format&fit=crop", link: "#grid" },
        { name: "School Wear", img: "https://images.unsplash.com/photo-1503944583220-79d8926dd5e2?q=80&w=300&auto=format&fit=crop", link: "#grid" }
    ];

    const kidsDeals = [
        { title: "LITTLE CHAMPIONS", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop", offer: "UNDER ₹799", color: "#183a6b" },
        { title: "PARTY PRINCESS", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", offer: "MIN 50% OFF", color: "#e11b23" }, // Replaced broken image
        { title: "WINTER WARMERS", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop", offer: "FLAT 40% OFF", color: "#d19a22" },
        { title: "SNEAKER SQUAD", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop", offer: "BUY 2 GET 1", color: "#222" }
    ];

    const kidsTrendingProducts = products.slice(0, 8); // Mocking 8 products for kids

    const kidsHeroSlides = [
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=2000&auto=format&fit=crop", // Kids playing
        "https://images.unsplash.com/photo-1622290291468-b3d97d09dbcc?q=80&w=2000&auto=format&fit=crop", // Kids fashion
        "https://images.unsplash.com/photo-1471286174890-9c112fb10d3e?q=80&w=2000&auto=format&fit=crop"  // Kids style
    ];

    const kidsUniqueBrands = [
        { name: "MOTHERCARE", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=200&auto=format&fit=crop" },
        { name: "GAP KIDS", img: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=200&auto=format&fit=crop" },
        { name: "ALLEN SOLLY", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&auto=format&fit=crop" },
        { name: "UNITED COLORS", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=200&auto=format&fit=crop" },
        { name: "RUFF", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=200&auto=format&fit=crop" },
        { name: "PEPE JEANS", img: "https://images.unsplash.com/photo-1485546246426-d64df9d20df4?q=80&w=200&auto=format&fit=crop" }
    ];

    return (
        <div className="shop-page-standard" style={{ backgroundColor: '#fff' }}>

            <KidsPlayfulHero />

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

export default Kids;
