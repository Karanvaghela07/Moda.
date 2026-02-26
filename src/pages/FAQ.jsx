import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/about.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="faq-item-elite"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '2rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>{question}</span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', border: '1px solid #000', borderRadius: '50%' }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p style={{ paddingBottom: '2rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const faqs = [
        { q: "Where does The Indie Store ship?", a: "We ship globally. From New York to Tokyo, if you have an address, we can reach you. International shipping times vary between 3-10 business days depending on customs processing." },
        { q: "What is the return policy?", a: "We accept returns within 30 days. However, the item must be in archive condition—unworn, unwashed, and with all original tags intact. We treat our garments as art; we expect the same from you." },
        { q: "How do I track my order?", a: "Once your order is dispatched from our facility, you will receive a tracking link via email. You can also log in to your account to view real-time status updates." },
        { q: "Are the collections limited?", a: "Yes. Most of our drops are limited runs. We believe in scarcity and value. Once a piece is gone, it is archived forever." },
        { q: "Do you offer collaborations?", a: "We are selective. If you represent a brand or artist that aligns with our conviction, reach out to collabs@theindiestore.com." }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}
                    >
                        Need Help?
                    </motion.h1>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>Everything you need to know about the vault.</p>
                </div>

                {/* FAQ LIST */}
                <div style={{ borderTop: '1px solid #eaeaea' }}>
                    {faqs.map((f, i) => (
                        <FAQItem key={i} question={f.q} answer={f.a} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
