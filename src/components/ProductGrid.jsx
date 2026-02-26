import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import '../styles/products.css';

const ProductGrid = ({ products: propProducts, limit, hideHeader = false }) => {
    let displayProducts = propProducts || products;
    if (limit) {
        displayProducts = displayProducts.slice(0, limit);
    }

    return (
        <section className={`product-section ${hideHeader ? 'no-header' : ''}`}>
            <div className="container">
                {!hideHeader && (
                    <div className="section-header">
                        <h2>Latest Arrivals</h2>
                        <a href="/shop" className="view-all">View All</a>
                    </div>
                )}

                <div className="product-grid">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
