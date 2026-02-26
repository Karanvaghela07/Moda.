import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/home.css';

const ConceptText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const text = "WE DO NOT DESIGN CLOTHES. WE DESIGN ARMOR FOR THE MODERN WORLD.";

    return (
        <section className="concept-text-section">
            <div className="concept-container" ref={ref}>
                <p className="concept-small">THE MANIFESTO</p>
                <h2 className="concept-display">
                    {text.split(" ").map((word, index) => (
                        <span key={index} className="word-wrapper">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : { y: "100%" }}
                                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                className="word-inner"
                            >
                                {word}
                            </motion.span>
                            <span className="space">&nbsp;</span>
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
};

export default ConceptText;
