import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
        <div style={{ color: '#666', lineHeight: '1.8' }}>{children}</div>
    </div>
);

const Terms = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Terms of Use</h1>
                    <p style={{ color: '#999' }}>Last Updated: February 20, 2026</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Section title="1. Introduction">
                        <p>Welcome to The Indie Store. By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                    </Section>

                    <Section title="2. Intellectual Property Rights">
                        <p>Other than the content you own, under these Terms, The Indie Store and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                    </Section>

                    <Section title="3. Restrictions">
                        <p>You are specifically restricted from all of the following:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'circle' }}>
                            <li>publishing any Website material in any other media;</li>
                            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                            <li>publicly performing and/or showing any Website material;</li>
                            <li>using this Website in any way that is or may be damaging to this Website;</li>
                            <li>using this Website in any way that impacts user access to this Website;</li>
                        </ul>
                    </Section>

                    <Section title="4. Products & Terms">
                        <p>All products are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
                    </Section>

                    <Section title="5. Limitation of Liability">
                        <p>In no event shall The Indie Store, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. The Indie Store, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                    </Section>

                </motion.div>

            </div>
        </div>
    );
};

export default Terms;
