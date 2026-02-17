import React from 'react';
import Footer from '../components/Footer';

const Returns = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-main)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Returns & Exchanges</h1>

                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    We want you to be completely satisfied with your purchase. If for any reason you are not, we gladly accept returns of unworn, unwashed, undamaged, or defective merchandise.
                </p>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Return Policy</h3>
                <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem', paddingLeft: '1.2rem' }}>
                    <li>Returns must be postmarked within 30 days of the delivery date.</li>
                    <li>Items must be returned in their original condition and packaging with all tags attached.</li>
                    <li>Final sale items cannot be returned or exchanged.</li>
                </ul>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How to Return</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    To initiate a return, please contact our support team at support@moda.com. We will provide you with a pre-paid return shipping label.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Returns;
