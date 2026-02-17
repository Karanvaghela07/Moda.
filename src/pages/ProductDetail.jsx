import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';
import '../styles/product-detail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        if (found) setProduct(found);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="loading">Loading...</div>;

    return (
        <>
            <div className="product-detail-page">
                <div className="pd-container">
                    <motion.div
                        className="pd-gallery"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="main-image">
                            <img src={product.image1} alt={product.name} />
                        </div>
                        <div className="secondary-images">
                            <img src={product.image2} alt={product.name} />
                            <img src={product.image1} alt={product.name} />
                        </div>
                    </motion.div>

                    <motion.div
                        className="pd-info"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="pd-header">
                            <span className="pd-breadcrumbs">Home / Shop / {product.category}</span>
                            <h1>{product.name}</h1>
                            <p className="pd-price">${product.price}</p>
                        </div>

                        <div className="pd-description">
                            <p>
                                Crafted with precision and designed for the modern aesthetic.
                                This piece combines luxury materials with functional elegance.
                                Perfect for any occasion where you need to stand out.
                            </p>
                        </div>

                        <div className="pd-options">
                            <span>Size</span>
                            <div className="size-selector">
                                {['S', 'M', 'L', 'XL'].map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Bag — ${product.price}
                        </button>

                        <div className="pd-meta">
                            <span>Free shipping worldwide</span>
                            <span>30-day return policy</span>
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className="related-products-section" style={{ padding: '4rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem', textTransform: 'uppercase' }}>You Might Also Like</h3>
                <div className="product-grid">
                    {products
                        .filter(p => p.id !== product?.id)
                        .slice(0, 3)
                        .map(related => (
                            <ProductCard key={related.id} product={related} />
                        ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetail;
