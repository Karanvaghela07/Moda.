import React from 'react';
import Footer from '../components/Footer';

const Careers = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-main)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Careers</h1>

                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '4rem' }}>
                    We are always looking for passionate individuals to join our team. At MODA, we value creativity, sustainability, and innovation.
                </p>

                <div className="job-listing" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Senior Fashion Designer</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>New York, NY · Full-time</p>
                    <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.5rem', background: 'white', color: 'black', border: 'none', cursor: 'pointer' }}>Apply Now</button>
                </div>

                <div className="job-listing" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>E-commerce Manager</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Remote · Full-time</p>
                    <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.5rem', background: 'white', color: 'black', border: 'none', cursor: 'pointer' }}>Apply Now</button>
                </div>

                <p style={{ color: 'var(--text-muted)', marginTop: '2rem' }}>
                    Don't see a role for you? Send your portfolio to careers@moda.com.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Careers;
