import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/home.css';

const RunwayScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const looks = [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550614000-4b9519e09eb3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529139574466-a302c2d56dc8?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <section ref={targetRef} className="runway-scroll-section">
            <div className="sticky-wrapper">
                <div className="runway-header">
                    <h2>THE RUNWAY</h2>
                    <span>SS / 26</span>
                </div>
                <motion.div style={{ x }} className="runway-track">
                    {looks.map((src, i) => (
                        <div key={i} className="runway-look">
                            <img src={src} alt={`Runway Look ${i + 1}`} />
                            <span className="look-number">LOOK 0{i + 1}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default RunwayScroll;
