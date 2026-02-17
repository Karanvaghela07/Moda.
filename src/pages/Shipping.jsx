import React from 'react';
import Footer from '../components/Footer';

const Shipping = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-main)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Shipping Information</h1>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Processing Time</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Domestic Shipping Rates</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>Standard shipping (5-7 business days) is free for orders over $150. For orders under $150, a flat rate of $10 applies.</p>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>International Shipping</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>We offer international shipping via DHL Express. Rates are calculated at checkout based on destination and weight.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Shipping;
