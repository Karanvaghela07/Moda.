import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, Package, Truck, MapPin, Calendar,
    CreditCard, Clock, Star, ChevronRight,
    ShieldCheck, ArrowLeft, Download, RefreshCw,
    MessageCircle, Phone, X
} from 'lucide-react';
import { findOrderById, STATUS_INDEX } from '../data/ordersData';
import { generateInvoice } from '../utils/invoiceGenerator.jsx';
import { useAuth } from '../context/AuthContext';
import '../styles/order-details.css';

/* ─── Framer helpers ─────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }
});

/* ─── Status stepper config ──────────────────── */
const STEP_CONFIG = [
    { label: 'Ordered', icon: <Calendar size={18} /> },
    { label: 'Packed', icon: <Package size={18} /> },
    { label: 'Shipped', icon: <Truck size={18} /> },
    { label: 'Out for Delivery', icon: <Clock size={18} /> },
    { label: 'Delivered', icon: <Check size={18} /> },
];

/* Step dates per status level (matched to ORD-8821 sample) */
const STEP_DATES = [
    ['Ordered', 'Packed', 'Shipped', 'Expected Tomorrow', ''],
];

/* ─── Review modal ───────────────────────────── */
const ReviewModal = ({ item, onClose }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating === 0) return;
        // In a real app this would call an API
        setSubmitted(true);
        setTimeout(onClose, 1600);
    };

    return (
        <div className="od-modal-overlay" onClick={onClose}>
            <motion.div
                className="od-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={e => e.stopPropagation()}
            >
                <button className="od-modal-close" onClick={onClose}><X size={18} /></button>

                {submitted ? (
                    <div className="od-modal-success">
                        <div className="od-modal-success-icon">✓</div>
                        <p>Thanks for your review!</p>
                    </div>
                ) : (
                    <>
                        <p className="od-modal-eyebrow">Rate this item</p>
                        <div className="od-modal-item">
                            <img src={item.img} alt={item.name} className="od-modal-thumb" />
                            <span>{item.name}</span>
                        </div>

                        <div className="od-stars">
                            {[1, 2, 3, 4, 5].map(s => (
                                <Star
                                    key={s}
                                    size={30}
                                    className="od-star"
                                    fill={(hover || rating) >= s ? '#f59e0b' : 'none'}
                                    stroke={(hover || rating) >= s ? '#f59e0b' : '#ddd'}
                                    onMouseEnter={() => setHover(s)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(s)}
                                />
                            ))}
                        </div>

                        <button
                            className={`od-modal-submit ${rating > 0 ? 'active' : ''}`}
                            onClick={handleSubmit}
                        >
                            Submit Review
                        </button>
                    </>
                )}
            </motion.div>
        </div>
    );
};

/* ─── Main Component ─────────────────────────── */
const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const [order, setOrder] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [fillWidth, setFillWidth] = useState(0);
    const [reviewItem, setReviewItem] = useState(null);   // item being reviewed

    useEffect(() => {
        window.scrollTo(0, 0);

        const found = findOrderById(id, currentUser?.email);
        if (!found) {
            setNotFound(true);
            return;
        }
        setOrder(found);

        // Animate the stepper fill after data loads
        const statusIdx = STATUS_INDEX[found.status] ?? 0;      // 0–4
        const totalGaps = STEP_CONFIG.length - 1;               // 4
        // fill reaches the right edge of the last completed icon
        const fillPct = statusIdx === 0 ? 5 : (statusIdx / totalGaps) * 100;
        setTimeout(() => setFillWidth(fillPct), 500);
    }, [id, currentUser]);

    /* ── 404 state ────────────────────────────── */
    if (notFound) return (
        <div className="od-page">
            <div className="od-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📦</div>
                <h2 style={{ fontFamily: 'Quicksand,sans-serif', marginBottom: '0.5rem' }}>Order not found</h2>
                <p style={{ color: '#888', marginBottom: '2rem' }}>We couldn't find an order with ID <strong>#{id}</strong>.</p>
                <Link to="/orders" className="od-back-link" style={{ display: 'inline-flex' }}>
                    ← Back to My Orders
                </Link>
            </div>
        </div>
    );

    /* ── Loading state ────────────────────────── */
    if (!order) return (
        <div className="od-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div className="od-spinner" />
        </div>
    );

    /* ── Computed values ──────────────────────── */
    const statusIdx = STATUS_INDEX[order.status] ?? 0;
    const isDelivered = order.status === 'Delivered';
    const statusClass = order.status === 'Shipped' ? 'shipped'
        : order.status === 'Delivered' ? 'delivered'
            : 'processing';

    // Build step states
    const steps = STEP_CONFIG.map((cfg, i) => ({
        ...cfg,
        state: i < statusIdx ? 'completed'
            : i === statusIdx ? (statusIdx === STEP_CONFIG.length - 1 ? 'completed' : 'active')
                : 'pending',
    }));

    // Build step date labels from order data
    const stepDates = [
        order.date,                                   // Ordered
        order.date,                                   // Packed
        order.items.length ? order.date : '',         // Shipped
        isDelivered ? '' : 'Expected ' + order.eta,  // Out for Delivery
        isDelivered ? order.eta : '',                 // Delivered
    ];

    // Invoice download — adapts order shape to invoiceGenerator's expected format
    const handleDownloadInvoice = () => {
        generateInvoice({
            id: order.id,
            date: order.date,
            total: order.total.toLocaleString(),
            status: order.status,
            address: order.address,
            payment: order.payment,
            items: order.items.map(item => ({ name: item.name, img: item.img }))
        });
    };

    return (
        <>
            <div className="od-page">
                <div className="od-container">

                    {/* ── Back nav ─────────────────────────────── */}
                    <motion.button
                        className="od-back-btn"
                        onClick={() => navigate('/orders')}
                        {...fadeUp(0)}
                    >
                        <ArrowLeft size={16} /> Back to My Orders
                    </motion.button>

                    {/* ── Hero Delivery Banner ──────────────────── */}
                    <motion.div className={`od-hero ${isDelivered ? 'delivered' : ''}`} {...fadeUp(0.06)}>
                        <div className="od-hero-left">
                            <p className="od-hero-eyebrow">
                                <span className="od-hero-dot" />
                                {order.status}
                            </p>
                            <h1 className="od-hero-title">
                                {isDelivered
                                    ? 'Your order has been delivered! 🎉'
                                    : 'Your package is on its way!'}
                            </h1>
                            <p className="od-hero-sub">
                                {isDelivered
                                    ? 'We hope you love your new items. Don\'t forget to leave a review!'
                                    : 'Sit tight — it\'ll be at your doorstep very soon.'}
                            </p>
                            <span className="od-order-id-pill">
                                Order #{order.id} · Placed {order.date}
                            </span>
                        </div>

                        <div className="od-hero-right">
                            <p className="od-eta-label">
                                {isDelivered ? 'Delivered on' : 'Estimated Delivery'}
                            </p>
                            <p className="od-eta-date">{order.eta}</p>
                            <p className="od-eta-sub">{order.etaShort}</p>
                        </div>
                    </motion.div>

                    {/* ── Horizontal Stepper ───────────────────── */}
                    <motion.div className="od-stepper-card" {...fadeUp(0.13)}>
                        <div className="od-stepper-header">
                            <h2 className="od-stepper-heading">Order Progress</h2>
                            <span className="od-stepper-date">
                                Last updated: {order.date}
                            </span>
                        </div>

                        <div className="od-stepper">
                            {/* grey track behind everything */}
                            <div className="od-stepper-track" />

                            {/* animated green fill */}
                            <div
                                className="od-stepper-fill"
                                style={{ width: `calc(${fillWidth}% - 0px)` }}
                            />

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    className={`od-h-step ${step.state}`}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.38 }}
                                >
                                    <div className="od-h-step-icon">
                                        {step.state === 'completed' ? <Check size={18} /> : step.icon}
                                    </div>
                                    <div className="od-h-step-label">{step.label}</div>
                                    {stepDates[i] && (
                                        <div className="od-h-step-date">{stepDates[i]}</div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Main Grid ────────────────────────────── */}
                    <div className="od-grid">

                        {/* Left column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Items */}
                            <motion.div className="od-card" {...fadeUp(0.18)}>
                                <p className="od-card-label">Items in this Order — {order.items.length} item{order.items.length > 1 ? 's' : ''}</p>

                                {order.items.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        className="od-item-row"
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.38 }}
                                    >
                                        <div className="od-item-img-wrap">
                                            <img src={item.img} alt={item.name} className="od-item-img" />
                                            <span className="od-item-qty-badge">{item.quantity}</span>
                                        </div>

                                        <div className="od-item-info">
                                            <p className="od-item-name">{item.name}</p>
                                            <p className="od-item-meta">Color: {item.color}</p>
                                            <span className="od-item-size-pill">Size {item.size}</span>
                                        </div>

                                        <div className="od-item-right">
                                            <div className="od-item-price">₹{item.price.toLocaleString()}</div>
                                            {/* Only show rate button for delivered orders */}
                                            {isDelivered && (
                                                <button
                                                    className="od-review-btn"
                                                    onClick={() => setReviewItem(item)}
                                                >
                                                    <Star size={11} /> Rate
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Help & Support */}
                            <motion.div className="od-card" {...fadeUp(0.26)}>
                                <p className="od-card-label">Need Help?</p>
                                <ul className="od-help-list">
                                    <li className="od-help-item" onClick={() => navigate('/returns')}>
                                        <span className="od-help-icon">📦</span>
                                        <div>
                                            <div className="od-help-title">Return or Exchange</div>
                                            <div className="od-help-sub">Easy returns within 30 days</div>
                                        </div>
                                        <ChevronRight size={15} className="od-help-chevron" />
                                    </li>
                                    <li className="od-help-item" onClick={() => navigate('/contact')}>
                                        <span className="od-help-icon">💬</span>
                                        <div>
                                            <div className="od-help-title">Chat with Support</div>
                                            <div className="od-help-sub">Typically replies in 2 min</div>
                                        </div>
                                        <ChevronRight size={15} className="od-help-chevron" />
                                    </li>
                                    <li className="od-help-item">
                                        <span className="od-help-icon">📞</span>
                                        <a href="tel:18001234567" style={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}>
                                            <div>
                                                <div className="od-help-title">Call Us</div>
                                                <div className="od-help-sub">1800-123-4567 · Mon–Sat 9AM–7PM</div>
                                            </div>
                                        </a>
                                        <ChevronRight size={15} className="od-help-chevron" />
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="od-sidebar">

                            {/* Shipping + Map visual */}
                            <motion.div className="od-card od-shipping-card" {...fadeUp(0.22)}>
                                <p className="od-card-label">Shipping Details</p>

                                <div className="od-shipping-map">
                                    <div className="od-shipping-map-pin">
                                        <MapPin size={20} color="#e11b23" />
                                    </div>
                                </div>

                                <div className="od-address-row">
                                    <div className="od-address-icon">
                                        <MapPin size={15} />
                                    </div>
                                    <div>
                                        <p className="od-address-label">Home Address</p>
                                        <p className="od-address-text">{order.address}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Payment */}
                            <motion.div className="od-card" {...fadeUp(0.28)}>
                                <p className="od-card-label">Payment Summary</p>

                                <div className="od-price-row">
                                    <span className="od-price-label">
                                        Subtotal ({order.items.length} item{order.items.length > 1 ? 's' : ''})
                                    </span>
                                    <span className="od-price-value">₹{order.total.toLocaleString()}</span>
                                </div>
                                <div className="od-price-row">
                                    <span className="od-price-label">Shipping</span>
                                    <span className="od-price-value free">Free</span>
                                </div>
                                <div className="od-price-row">
                                    <span className="od-price-label">Discount</span>
                                    <span className="od-price-value" style={{ color: '#e11b23' }}>—</span>
                                </div>

                                <hr className="od-total-divider" />

                                <div className="od-total-row">
                                    <span>Total Paid</span>
                                    <span className="od-total-amount">₹{order.total.toLocaleString()}</span>
                                </div>

                                <div className="od-payment-method">
                                    <CreditCard size={15} />
                                    {order.payment}
                                    <ShieldCheck size={14} style={{ marginLeft: 'auto', color: '#1a9e5c' }} />
                                </div>
                            </motion.div>

                            {/* Quick Actions */}
                            <motion.div className="od-card" {...fadeUp(0.34)}>
                                <p className="od-card-label">Quick Actions</p>
                                <ul className="od-help-list">
                                    <li className="od-help-item" onClick={handleDownloadInvoice}>
                                        <span className="od-help-icon">📄</span>
                                        <div>
                                            <div className="od-help-title">Download Invoice</div>
                                            <div className="od-help-sub">Opens print-ready PDF</div>
                                        </div>
                                        <Download size={14} className="od-help-chevron" />
                                    </li>
                                    <li className="od-help-item" onClick={() => navigate('/orders')}>
                                        <span className="od-help-icon">🔁</span>
                                        <div>
                                            <div className="od-help-title">All My Orders</div>
                                            <div className="od-help-sub">View order history</div>
                                        </div>
                                        <ChevronRight size={15} className="od-help-chevron" />
                                    </li>
                                    <li className="od-help-item" onClick={() => navigate('/shop')}>
                                        <span className="od-help-icon">🛍️</span>
                                        <div>
                                            <div className="od-help-title">Continue Shopping</div>
                                            <div className="od-help-sub">Browse new arrivals</div>
                                        </div>
                                        <ChevronRight size={15} className="od-help-chevron" />
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Review Modal ── */}
            <AnimatePresence>
                {reviewItem && (
                    <ReviewModal
                        item={reviewItem}
                        onClose={() => setReviewItem(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default OrderDetails;
