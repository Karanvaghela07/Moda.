import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>MODA.</h2>
                        <p>Elevating everyday essentials.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Shop</h4>
                            <a href="/shop">New Arrivals</a>
                            <a href="/shop">Best Sellers</a>
                            <a href="/collections">Accessories</a>
                            <a href="/shop">Sale</a>
                        </div>

                        <div className="link-column">
                            <h4>About</h4>
                            <a href="/about">Our Story</a>
                            <a href="/about">Sustainability</a>
                            <a href="/careers">Careers</a>
                        </div>

                        <div className="link-column">
                            <h4>Support</h4>
                            <a href="/faq">FAQ</a>
                            <a href="/shipping">Shipping</a>
                            <a href="/returns">Returns</a>
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
                    <p>&copy; 2026 MODA Inc. All rights reserved.</p>
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
