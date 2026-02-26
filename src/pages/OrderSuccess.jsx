import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, PackageOpen } from 'lucide-react';
import '../styles/order-success.css';

const OrderSuccess = () => {
    const location = useLocation();
    const { orderId } = location.state || {};
    const displayOrderId = orderId || `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const [pageLoaded, setPageLoaded] = useState(false);

    // One-time confetti effect
    useEffect(() => {
        setPageLoaded(true);
        window.scrollTo(0, 0);

        const createConfetti = () => {
            const colors = ['#e11b23', '#4ade80', '#fbbf24', '#60a5fa', '#111'];
            // Generate exactly one burst of 60 confetti pieces
            for (let i = 0; i < 60; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'os-confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                // Range from 2 to 5 seconds to fall completely
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                // Add varied shapes for "flower" feel (circles/squares)
                if (Math.random() > 0.5) confetti.style.borderRadius = '50%';

                document.body.appendChild(confetti);

                // Clean up DOM after falling
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        };

        // Fire instantly only once on mount
        createConfetti();

    }, []);

    return (
        <div className="os-centered-wrapper">
            <motion.div
                className="os-centered-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: pageLoaded ? 1 : 0, y: pageLoaded ? 0 : 30 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <div className="os-icon-circle-centered">
                    <Check size={40} color="#fff" strokeWidth={3} />
                </div>

                <h1 className="os-title-centered">Order Confirmed</h1>
                <p className="os-subtitle-centered">
                    Thank you for your purchase. Your impeccable taste is on the way.
                    We've received your order and are preparing it for shipment.
                </p>

                <div className="os-details-box-centered">
                    <div className="os-detail-item">
                        <span className="os-label">Order Number</span>
                        <span className="os-value">{displayOrderId}</span>
                    </div>
                    <div className="os-detail-item">
                        <span className="os-label">Date Placed</span>
                        <span className="os-value">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="os-detail-item">
                        <span className="os-label">Payment</span>
                        <span className="os-value os-green">Successful</span>
                    </div>
                </div>

                <div className="os-tracking-banner-centered">
                    <PackageOpen size={20} color="#111" />
                    <span>You will receive an email with tracking details shortly.</span>
                </div>

                <div className="os-actions-centered">
                    <Link to="/shop" className="os-btn-primary">
                        Continue Exploring <ArrowRight size={18} />
                    </Link>
                    <Link to={`/order/${displayOrderId}`} className="os-btn-secondary">
                        View Order Details
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;
