import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, RefreshCw, CreditCard, Ruler, MessageSquare, Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/support.css';

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const topics = [
        { icon: <Package size={24} strokeWidth={1.5} />, title: "Track Order", p: "Check shipping status" },
        { icon: <RefreshCw size={24} strokeWidth={1.5} />, title: "Returns", p: "Start a return or exchange" },
        { icon: <CreditCard size={24} strokeWidth={1.5} />, title: "Payments", p: "Manage billing & invoices" },
        { icon: <Ruler size={24} strokeWidth={1.5} />, title: "Sizing", p: "View fit guides by brand" },
    ];

    const faqs = [
        { q: "How long does standard shipping take?", a: "Standard shipping typically takes 3-5 business days within the continental US. You will receive a tracking link once your order ships." },
        { q: "What is your return policy?", a: "We accept returns of unworn, pristine items within 14 days of delivery. Items must have original tags attached." },
        { q: "Can I modify my order after placing it?", a: "Orders are processed quickly. We can only guarantee modifications within 1 hour of placement. Please contact chat support immediately." },
        { q: "Do you ship internationally?", a: "Yes, we ship globally via DHL Express. Taxes and duties are calculated automatically at checkout based on your region." }
    ];

    return (
        <div className="support-v3-wrapper">

            {/* Header Section */}
            <header className="sv3-header">
                <motion.div
                    className="sv3-header-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hello. How can we help?</h1>
                    <p>Search our knowledge base or browse categories below.</p>

                    <div className="sv3-search-bar">
                        <Search size={22} className="sv3-search-icon" />
                        <input type="text" placeholder="Search for returns, shipping, sizing..." />
                        <button>Search</button>
                    </div>
                </motion.div>
            </header>

            <main className="sv3-main-container">

                {/* Topics Grid */}
                <section className="sv3-topics-grid">
                    {topics.map((topic, i) => (
                        <motion.div
                            className="sv3-topic-card"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <div className="sv3-tc-icon">{topic.icon}</div>
                            <div className="sv3-tc-text">
                                <h3>{topic.title}</h3>
                                <p>{topic.p}</p>
                            </div>
                            <ChevronRight size={20} className="sv3-tc-arrow" />
                        </motion.div>
                    ))}
                </section>

                <div className="sv3-content-split">

                    {/* FAQ Section */}
                    <section className="sv3-faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="sv3-faq-list">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    className="sv3-faq-item"
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h4>{faq.q}</h4>
                                    <p>{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                        <Link to="/faq" className="sv3-view-all-link">Read all FAQs <ChevronRight size={16} /></Link>
                    </section>

                    {/* Contact Sidebar */}
                    <aside className="sv3-contact-sidebar">
                        <h2>Get in Touch</h2>
                        <p className="sv3-cs-desc">Our concierge team is available 24/7 to assist you with any inquiries.</p>

                        <div className="sv3-contact-cards">
                            <a href="#" className="sv3-cc-card">
                                <MessageSquare size={20} />
                                <div>
                                    <h4>Live Chat</h4>
                                    <span>Typically replies in minutes</span>
                                </div>
                            </a>
                            <a href="mailto:support@theindiestore.com" className="sv3-cc-card">
                                <Mail size={20} />
                                <div>
                                    <h4>Email Support</h4>
                                    <span>support@theindiestore.com</span>
                                </div>
                            </a>
                            <a href="tel:18005550199" className="sv3-cc-card">
                                <Phone size={20} />
                                <div>
                                    <h4>Phone Support</h4>
                                    <span>1-800-555-0199</span>
                                </div>
                            </a>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default Support;
