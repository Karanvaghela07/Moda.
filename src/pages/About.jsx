
import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Zap, Star, Heart, ShieldCheck, Smile } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
    // Animation variants for staggered text
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div style={{ paddingTop: '80px', background: '#fff', color: '#000', minHeight: '100vh', fontFamily: 'var(--font-main)' }}>

            {/* HERO SECTION - Typographic Impact */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <Ghost size={80} color="#e11b23" strokeWidth={1.5} />
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-display)',
                        lineHeight: '0.9',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        marginBottom: '1rem'
                    }}
                >
                    Not Just <br /> <span style={{ color: '#e11b23' }}>Another</span> Store.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        lineHeight: '1.6',
                        fontWeight: '500'
                    }}
                >
                    We are The Indie Store. The Vibe Vault. <br />
                    Home to the rebels, the dreamers, and the ones who dress to express.
                </motion.p>
            </section>

            {/* MARQUEE STRIP */}
            <div style={{
                background: '#000',
                color: '#fff',
                padding: '1.5rem 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'flex'
            }}>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    style={{ display: 'flex', gap: '4rem', fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase' }}
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            pop culture <Star size={20} fill="#e11b23" stroke="none" /> street style <Star size={20} fill="#e11b23" stroke="none" /> fandom
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* MANIFESTO GRID */}
            <section style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={container}
                    >
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', marginBottom: '2rem', lineHeight: '1' }}>
                            THE <span style={{ color: '#e11b23' }}>VIBE</span> <br /> CHECK.
                        </h2>
                        <motion.p variants={item} style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            It started with a simple idea: Why does fan merchandise have to be boring? Why does streetwear have to be overpriced?
                        </motion.p>
                        <motion.p variants={item} style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                            We curated a collection that sits right at the intersection of pop culture and high fashion. Whether you're a Potterhead, a Marvel stan, or just someone who appreciates a sick graphic tee, we've got you covered.
                        </motion.p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {[
                            { icon: <Zap size={32} />, title: "Official Merch", desc: "100% Licensed. 0% Knockoff." },
                            { icon: <Smile size={32} />, title: "Community First", desc: "Designed by fans, for fans." },
                            { icon: <ShieldCheck size={32} />, title: "Premium Quality", desc: "Fabrics that last longer than your ex." },
                            { icon: <Heart size={32} />, title: "Made with Love", desc: "Packed with care & confetti." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{
                                    background: '#f9f9f9',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                }}>
                                    {React.cloneElement(card.icon, { color: '#e11b23' })}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{card.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#777' }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NUMBERS SECTION */}
            <section style={{ background: '#e11b23', color: '#fff', padding: '6rem 2rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
                    {[
                        { num: "50K+", label: "Happy Customers" },
                        { num: "100+", label: "Official Designs" },
                        { num: "4.9/5", label: "Average Rating" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2, type: 'spring' }}
                                style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}
                            >
                                {stat.num}
                            </motion.div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOUNDER / BOTTOM NOTE */}
            <section style={{ padding: '8rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>"WE DON'T FOLLOW TRENDS.<br />WE SET THE VIBE."</h2>
                <div style={{ width: '60px', height: '4px', background: '#000', margin: '0 auto 2rem' }}></div>
                <p style={{ fontSize: '1.1rem', color: '#555' }}>— Team Indie Store</p>
            </section>

        </div>
    );
};

export default About;
