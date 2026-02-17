import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import Lookbook from '../components/Lookbook';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { Truck, ShieldCheck, RefreshCw, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import { Instagram, Play } from 'lucide-react';
import '../styles/home.css';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <Hero />

            {/* Brand Marquee */}
            <div className="brand-marquee">
                <div className="marquee-content" style={{ animation: 'marquee 40s linear infinite' }}>
                    <span className="marquee-item">Sustainability</span>
                    <span className="marquee-item">Luxury</span>
                    <span className="marquee-item">Timeless</span>
                    <span className="marquee-item">Visionary</span>
                    <span className="marquee-item">Craftsmanship</span>
                    <span className="marquee-item">Sustainability</span>
                    <span className="marquee-item">Luxury</span>
                    <span className="marquee-item">Timeless</span>
                    <span className="marquee-item">Visionary</span>
                    <span className="marquee-item">Craftsmanship</span>
                </div>
            </div>

            {/* Features Section */}
            <section style={{ padding: '4rem 0', background: '#0a0a0a', borderBottom: '1px solid #222' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <Truck size={32} color="white" />
                        <h3 style={{ fontSize: '1.2rem' }}>Free Shipping</h3>
                        <p style={{ color: 'var(--text-muted)' }}>On all orders over $150</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <ShieldCheck size={32} color="white" />
                        <h3 style={{ fontSize: '1.2rem' }}>Secure Payment</h3>
                        <p style={{ color: 'var(--text-muted)' }}>100% secure checkout</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <RefreshCw size={32} color="white" />
                        <h3 style={{ fontSize: '1.2rem' }}>Easy Returns</h3>
                        <p style={{ color: 'var(--text-muted)' }}>30-day return policy</p>
                    </div>
                </div>
            </section>

            <Trending />

            {/* Editorial Grid (The Edit) */}
            <section className="editorial-section">
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', textTransform: 'uppercase' }}>The Edit</h2>
                    <div className="editorial-grid">
                        <div className="editorial-item large">
                            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="Editorial Main" />
                            <div className="editorial-overlay">
                                <h3>Spring Awakening</h3>
                                <button className="btn-primary" style={{ marginTop: '1rem' }}>Shop Now</button>
                            </div>
                        </div>
                        <div className="editorial-item small">
                            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop" alt="Editorial Sub 1" />
                        </div>
                        <div className="editorial-item small">
                            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop" alt="Editorial Sub 2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', textTransform: 'uppercase' }}>Shop Category</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Men */}
                        <div
                            onClick={() => navigate('/shop')}
                            style={{ position: 'relative', height: '500px', overflow: 'hidden', cursor: 'pointer' }}
                        >
                            <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1887&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                                <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Men</h3>
                            </div>
                        </div>
                        {/* Women */}
                        <div
                            onClick={() => navigate('/shop')}
                            style={{ position: 'relative', height: '500px', overflow: 'hidden', cursor: 'pointer' }}
                        >
                            <img src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1964&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                                <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Women</h3>
                            </div>
                        </div>
                        {/* Accessories */}
                        <div
                            onClick={() => navigate('/shop')}
                            style={{ position: 'relative', height: '500px', overflow: 'hidden', cursor: 'pointer' }}
                        >
                            <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-scale" />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                                <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Accessories</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Parallax Section */}
            <section className="video-section">
                <img className="video-bg" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" alt="Campaign Video Placeholder" />
                <div className="video-content">
                    <h2>"Style is a way to say who you are without having to speak."</h2>
                    <button className="btn-primary" style={{ background: 'white', color: 'black', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Play size={20} fill="black" /> Watch Campaign
                    </button>
                </div>
            </section>

            <Lookbook />

            <ProductGrid />

            {/* Urban Mode / Street Style Section */}
            <section style={{ position: 'relative', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2070&auto=format&fit=crop"
                    alt="Urban Street Style"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.9', marginBottom: '2rem', textTransform: 'uppercase', color: 'white' }}>
                        Urban<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>Mode</span>
                    </h2>
                    <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: '#ddd' }}>Redefining street luxury.</p>
                    <button className="btn-primary" style={{ background: 'white', color: 'black', padding: '1rem 3rem', fontSize: '1.2rem' }}>Shop The Look</button>
                </div>
            </section>

            {/* Newsletter Section */}
            <section style={{ padding: '6rem 0', background: '#FFFFFF', color: 'black', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <Mail size={48} style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Join the List</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#666' }}>Sign up for exclusive access to new drops and special offers.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', background: 'white', color: 'black' }} />
                        <button style={{ padding: '1rem 2rem', background: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold' }}>Subscribe</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
