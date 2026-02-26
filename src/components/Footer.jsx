import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import '../styles/footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/logo.svg" alt="The Indie Store" style={{ height: '60px', marginBottom: '1rem' }} />
                        <p className="footer-tagline">The Vibe Vault.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Shop</h4>
                            <Link to="/new-arrivals">New Arrivals</Link>
                            <Link to="/best-sellers">Best Sellers</Link>
                            <Link to="/accessories">Accessories</Link>
                            <Link to="/sale">Sale</Link>
                        </div>
                        <div className="link-column">
                            <h4>Support</h4>
                            <Link to="/support">Support Home</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/shipping">Shipping</Link>
                            <Link to="/returns">Returns</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                        <div className="link-column">
                            <h4>Company</h4>
                            <Link to="/about">About Us</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/sustainability">Sustainability</Link>
                            <Link to="/terms">Terms & Conditions</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay in the loop</h4>
                        <form>
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 The Indie Store Inc. All rights reserved.</p>
                    <div className="social-links">
                        <Instagram size={20} />
                        <Twitter size={20} />
                        <Facebook size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
