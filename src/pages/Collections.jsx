import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/collections.css';

const ParallaxImage = ({ src, alt }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // Moves image from -15% to 15% on Y axis while scrolling
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className="parallax-img-wrapper">
            <motion.img
                src={src}
                alt={alt}
                style={{ y }}
                className="parallax-img"
            />
        </div>
    );
};

const Collections = () => {
    const collections = [
        {
            id: 'heatwave',
            title: "HEATWAVE",
            subtitle: "SS 2026 / 01",
            desc: "Fluid silhouettes and breathable linens. Designed for the peak of summer, exploring the intersection of effortless comfort and sharp tailoring.",
            images: [
                "https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=2026&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1962&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550614000-4b95d4ebf07d?q=80&w=1964&auto=format&fit=crop"
            ]
        },
        {
            id: 'core',
            title: "THE CORE",
            subtitle: "PERMANENT / 02",
            desc: "The foundation of a modern wardrobe. Uncompromising quality across essential tees, structured denim, and perfectly weighted outerwear.",
            images: [
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop"
            ]
        },
        {
            id: 'atelier',
            title: "ATELIER",
            subtitle: "TAILORING / 03",
            desc: "Precision cut evening wear and experimental outerwear. A bold statement of our design philosophy, crafted for those who define the room.",
            images: [
                "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517841905240-472988dfdf1?q=80&w=1887&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop"
            ]
        }
    ];

    return (
        <div className="split-collections-page">

            <div className="collections-intro">
                <motion.span
                    className="intro-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    LOOKBOOKS
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    THE ARCHIVES
                </motion.h1>
            </div>

            {collections.map((coll, idx) => (
                <section className="split-section" key={coll.id}>

                    {/* Sticky Left Column for Text & CTA */}
                    <div className="split-left">
                        <motion.div
                            className="sticky-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="split-subtitle">{coll.subtitle}</span>
                            <h2 className="split-title">{coll.title}</h2>
                            <p className="split-desc">{coll.desc}</p>
                            <a href={`/shop?collection=${coll.id}`} className="split-shop-btn">
                                SHOP COLLECTION <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Scrolling Right Column for Images */}
                    <div className="split-right">
                        {coll.images.map((img, i) => (
                            <ParallaxImage key={i} src={img} alt={`${coll.title} look ${i + 1}`} />
                        ))}
                    </div>

                </section>
            ))}

        </div>
    );
};

export default Collections;
