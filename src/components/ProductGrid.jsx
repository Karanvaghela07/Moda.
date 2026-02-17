import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import '../styles/products.css';

const ProductGrid = ({ products: propProducts }) => {
    const displayProducts = propProducts || products;

    return (
        <section className="product-section">
            <div className="container">
                <div className="section-header">
                    <h2>Latest Arrivals</h2>
                    <a href="/shop" className="view-all">View All</a>
                </div>

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
