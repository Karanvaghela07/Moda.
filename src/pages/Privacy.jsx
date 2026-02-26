import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
        <div style={{ color: '#666', lineHeight: '1.8' }}>{children}</div>
    </div>
);

const Privacy = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Privacy Policy</h1>
                    <p style={{ color: '#999' }}>Last Updated: February 20, 2026</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Section title="1. Information We Collect">
                        <p>We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, credit card information and other contact or identifying information you choose to provide.</p>
                    </Section>

                    <Section title="2. How We Use Your Information">
                        <p>We use the information we collect to provide, maintain, and improve our services, such as to administer your account, process and deliver contest entries and rewards, and provide customer service. We may also use your information to send you technical notices, updates, security alerts and support and administrative messages.</p>
                    </Section>

                    <Section title="3. Cookies">
                        <p>We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.</p>
                    </Section>

                    <Section title="4. Security">
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure.</p>
                    </Section>

                    <Section title="5. Contact Us">
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@theindiestore.com.</p>
                    </Section>

                </motion.div>

            </div>
        </div>
    );
};

export default Privacy;
