import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import '../styles/about.css';

const About = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="about-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        WE ARE <br /> THE FUTURE <br /> OF FASHION
                    </motion.h1>
                </div>
                <div className="about-hero-img">
                    <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" alt="About Hero" />
                </div>
            </div>

            <section className="about-manifesto">
                <div className="container">
                    <p className="manifesto-text">
                        Born in the streets, raised in the studio. MODA is not just a label; it's a movement. We believe in the power of individual expression through fabric and form.
                    </p>
                </div>
            </section>

            <section className="about-split">
                <div className="split-img">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop" alt="Process" />
                </div>
                <div className="split-text">
                    <h2>The <br /> Process</h2>
                    <p>
                        From sketch to stitch, every garment is a labor of love. We source the finest materials from around the globe, ensuring that our footprint is small but our impact is massive.
                    </p>
                    <div className="stats">
                        <div>
                            <span>2024</span>
                            <small>Established</small>
                        </div>
                        <div>
                            <span>15k+</span>
                            <small>Community</small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-philosophy">
                <div className="philosophy-content">
                    <h2>"Design is not just what it looks like and feels like. Design is how it works."</h2>
                    <p>- Steve Jobs</p>
                </div>
            </section>


            <section className="about-commitment">
                <div className="container">
                    <h2>Our Commitment</h2>
                    <div className="commitment-grid">
                        <div className="commitment-item">
                            <h3>01</h3>
                            <h4>Sustainable Future</h4>
                            <p>We are dedicated to reducing our environmental footprint through eco-friendly materials and ethical production processes.</p>
                        </div>
                        <div className="commitment-item">
                            <h3>02</h3>
                            <h4>Innovation First</h4>
                            <p>Constantly pushing the boundaries of design and technology to create garments that are both functional and futuristic.</p>
                        </div>
                        <div className="commitment-item">
                            <h3>03</h3>
                            <h4>Timeless Craft</h4>
                            <p>Quality that lasts. detailed to perfection, ensuring that every piece you own is a staple for years to come.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-materiality">
                <div className="material-text">
                    <h2>Materiality</h2>
                    <p>We believe that the fabric dictates the form. Our sourcing team travels to the remotest corners of Japan and Italy to find textiles that tell a story.</p>
                    <ul className="material-list">
                        <li>Japanese Selvedge Denim</li>
                        <li>Organic Peruvian Cotton</li>
                        <li>Recycled Technical Fibers</li>
                    </ul>
                </div>
                <div className="material-img">
                    <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop" alt="Fabric Detail" />
                </div>
            </section>

            <section className="about-join">
                <div className="container">
                    <h2>Join the Movement</h2>
                    <p>Be the first to know about new drops, exclusive events, and behind-the-scenes content.</p>
                    <button className="join-btn">Subscribe Now</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
