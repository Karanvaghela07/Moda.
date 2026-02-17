import React from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { products } from '../data/products';
import '../styles/shop.css';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const [category, setCategory] = React.useState('All Products');
    const [priceRange, setPriceRange] = React.useState(500);
    const [selectedSize, setSelectedSize] = React.useState('');
    const [sortBy, setSortBy] = React.useState('default');
    const [filteredProducts, setFilteredProducts] = React.useState(products);

    // Categories list matches products.js data + 'All Products'
    const categories = ['All Products', 'Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Footwear'];
    const sizes = ['S', 'M', 'L', 'XL'];

    React.useEffect(() => {
        let result = [...products];

        // Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        // Filter by Category
        if (category !== 'All Products') {
            result = result.filter(p => p.category === category);
        }

        // Filter by Price
        result = result.filter(p => p.price <= priceRange);

        // Filter by Size (Mock logic as data doesn't have sizes, but UI should reflect selection)
        if (selectedSize) {
            // In a real app, you'd check: p.sizes.includes(selectedSize)
            // For now, we just pass through to show UI interaction, or you could randomly filter
        }

        // Sort
        if (sortBy === 'price-low') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(result);
    }, [category, priceRange, selectedSize, sortBy, searchQuery]);

    return (
        <div className="shop-page">
            <div className="shop-hero">
                <div className="shop-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                        alt="Shop Background"
                    />
                </div>
                <div className="container shop-hero-content" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '5rem', marginBottom: '1rem' }}
                    >
                        THE ARCHIVE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto', color: '#ddd' }}
                    >
                        Timeless pieces for the modern wardrobe.
                    </motion.p>
                </div>
            </div>

            <div className="container shop-container">
                {/* Sidebar */}
                <aside className="shop-sidebar">
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <ul>
                            {categories.map(item => (
                                <li
                                    key={item}
                                    onClick={() => setCategory(item)}
                                    style={{ color: category === item ? '#fff' : 'var(--text-muted)', fontWeight: category === item ? 'bold' : 'normal' }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3>Filter</h3>
                        <div className="filter-item">
                            <p>Max Price: ${priceRange}</p>
                            <input
                                type="range"
                                className="price-range"
                                min="0"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                            />
                        </div>
                        <div className="filter-item" style={{ marginTop: '2rem' }}>
                            <p style={{ marginBottom: '1rem' }}>Size</p>
                            <div className="size-grid">
                                {sizes.map(s => (
                                    <button
                                        key={s}
                                        className="size-btn"
                                        onClick={() => setSelectedSize(s === selectedSize ? '' : s)}
                                        style={{
                                            background: selectedSize === s ? '#fff' : 'transparent',
                                            color: selectedSize === s ? '#000' : 'var(--text-muted)'
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="shop-main">
                    <div className="shop-grid-header">
                        <span>Showing {filteredProducts.length} Results</span>
                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Sort by: Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
