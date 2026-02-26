import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 0.9 }}
                    >
                        Talk To <span style={{ color: '#e11b23' }}>Us.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Questions, collabs, or just want to say hey? We're listening.
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

                    {/* CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>HEADQUARTERS</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <MapPin size={24} color="#e11b23" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Visit Us</h4>
                                    <p style={{ color: '#666', lineHeight: '1.6' }}>123 Fashion Ave, <br />SoHo, New York, NY 10012</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Mail size={24} color="#e11b23" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Email Us</h4>
                                    <p style={{ color: '#666' }}>hello@theindiestore.com</p>
                                    <p style={{ color: '#666' }}>collabs@theindiestore.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                                    <Phone size={24} color="#e11b23" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Call Us</h4>
                                    <p style={{ color: '#666' }}>+1 (555) 123-4567</p>
                                    <p style={{ color: '#999', fontSize: '0.9rem' }}>Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: '#fafafa', padding: '3rem', borderRadius: '20px' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.05em' }}>NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    style={{ width: '100%', padding: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.05em' }}>EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    style={{ width: '100%', padding: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.05em' }}>MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="What's on your mind?"
                                    rows="5"
                                    style={{ width: '100%', padding: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'none' }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    background: '#000',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '1.2rem',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: '1rem'
                                }}
                            >
                                SEND MESSAGE <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
