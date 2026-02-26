import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import '../styles/about.css'; // Reusing elite styles for consistency

const Careers = () => {
    // Filter for "New" items (simulated by taking the first 8 items for now)
    const jobs = [
        { title: "Senior Fashion Designer", loc: "New York, NY", type: "Full-time", dept: "DESIGN" },
        { title: "Brand Narrative Lead", loc: "Remote", type: "Full-time", dept: "MARKETING" },
        { title: "Textile Innovator", loc: "Milan, Italy", type: "Contract", dept: "R&D" },
        { title: "E-commerce Manager", loc: "Remote", type: "Full-time", dept: "DIGITAL" }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        style={{ display: 'inline-block', marginBottom: '1rem' }}
                    >
                        {/* Simple Icon placeholder */}
                        <div style={{ width: '40px', height: '40px', background: '#000', borderRadius: '50%' }}></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textTransform: 'uppercase', marginBottom: '1rem' }}
                    >
                        Join The Collective
                    </motion.h1>
                    <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>We don't hire employees. We recruit visionaries who want to build the future of fashion.</p>
                </div>

                {/* JOB LISTINGS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '2rem',
                                border: '1px solid #eee',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                background: '#fff'
                            }}
                            whileHover={{ borderColor: '#000', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        >
                            <div className="job-info">
                                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#e11b23', display: 'block', marginBottom: '0.5rem' }}>{job.dept}</span>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', margin: 0 }}>{job.title}</h3>
                                <p style={{ color: '#888', marginTop: '0.5rem' }}>{job.loc} · {job.type}</p>
                            </div>
                            <div className="job-action">
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: '#f5f5f5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ArrowUpRight size={24} color="#000" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
