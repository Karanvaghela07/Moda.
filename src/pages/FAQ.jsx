import React from 'react';
import Footer from '../components/Footer';

const FAQ = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-main)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Frequently Asked Questions</h1>

                <div className="faq-item" style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Do you ship internationally?</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>What is your return policy?</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with tags still attached.</p>
                </div>

                <div className="faq-item" style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How can I track my order?</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Once your order ships, you will receive a confirmation email with a tracking number.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
