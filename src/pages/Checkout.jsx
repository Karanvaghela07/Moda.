import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin, CreditCard, ShieldCheck, Check,
    ChevronRight, Lock, Truck, Tag, ArrowLeft,
    Smartphone, Building2, Wallet
} from 'lucide-react';
import '../styles/checkout.css';

const STEPS = [
    { id: 1, label: 'Delivery', icon: MapPin },
    { id: 2, label: 'Payment', icon: CreditCard },
    { id: 3, label: 'Review', icon: ShieldCheck },
];

const PAYMENT_METHODS = [
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
    { id: 'upi', label: 'UPI', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
    { id: 'netbanking', label: 'Net Banking', icon: Building2, desc: 'All major banks' },
    { id: 'cod', label: 'Cash on Delivery', icon: Wallet, desc: 'Pay when delivered' },
];

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, half }) => (
    <div className={`ck-field ${half ? 'ck-field--half' : ''}`}>
        <label className="ck-label">{label}</label>
        <input
            className="ck-input"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="on"
        />
    </div>
);

const fadeSlide = {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
};

const Checkout = () => {
    const { cartItems, placeOrder } = useCart();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [payMethod, setPayMethod] = useState('card');
    const [formData, setFormData] = useState({
        name: '', phone: '', address: '', city: '', state: '', zip: '', country: 'India',
        cardNumber: '', cardName: '', expiry: '', cvv: '',
        upiId: '',
    });
    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [placing, setPlacing] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
    const shipping = subtotal >= 999 ? 0 : 99;
    const total = subtotal - discount + shipping;

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const applyCoupon = () => {
        if (coupon.trim().toUpperCase() === 'INDIE10') setCouponApplied(true);
        else alert('Invalid coupon code. Try INDIE10 for 10% off!');
    };

    const handlePlaceOrder = async () => {
        setPlacing(true);
        await new Promise(r => setTimeout(r, 1200));
        const order = placeOrder(
            { name: formData.name, address: formData.address, city: formData.city, zip: formData.zip, country: formData.country },
            payMethod === 'card' ? `Card •••• ${formData.cardNumber.slice(-4) || '0000'}` : payMethod.toUpperCase()
        );
        navigate('/order-success', { state: { orderId: order.id } });
    };

    if (cartItems.length === 0) {
        return (
            <div className="ck-empty">
                <div className="ck-empty__icon">🛍️</div>
                <h2>Your cart is empty</h2>
                <p>Add some items to your cart before checking out.</p>
                <Link to="/shop" className="ck-btn ck-btn--primary">Browse Shop</Link>
            </div>
        );
    }

    return (
        <div className="ck-page">
            {/* ── Top bar ─────────────────────────────────────── */}
            <div className="ck-topbar">
                <Link to="/cart" className="ck-topbar__back">
                    <ArrowLeft size={18} /> Back
                </Link>
                <div className="ck-topbar__brand">CHECKOUT</div>
                <div className="ck-topbar__secure"><Lock size={14} /> Secure Checkout</div>
            </div>

            {/* ── Stepper ─────────────────────────────────────── */}
            <div className="ck-stepper">
                {STEPS.map((s, i) => {
                    const done = step > s.id;
                    const active = step === s.id;
                    const Icon = s.icon;
                    return (
                        <React.Fragment key={s.id}>
                            <div
                                className={`ck-step ${done ? 'done' : ''} ${active ? 'active' : ''}`}
                                onClick={() => done && setStep(s.id)}
                                style={{ cursor: done ? 'pointer' : 'default' }}
                            >
                                <div className="ck-step__dot">
                                    {done ? <Check size={16} /> : <Icon size={16} />}
                                </div>
                                <span className="ck-step__label">{s.label}</span>
                            </div>
                            {i < STEPS.length - 1 && (
                                <div className={`ck-step__line ${done ? 'done' : ''}`} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* ── Body ────────────────────────────────────────── */}
            <div className="ck-body">

                {/* LEFT — Form area */}
                <div className="ck-left">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: Delivery */}
                        {step === 1 && (
                            <motion.div key="delivery" className="ck-card" {...fadeSlide}>
                                <div className="ck-card__head">
                                    <MapPin size={20} className="ck-card__icon" />
                                    <h2>Delivery Address</h2>
                                </div>
                                <div className="ck-fields">
                                    <InputField label="Full Name *" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                    <InputField label="Phone *" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" half />
                                    <InputField label="PIN Code *" name="zip" value={formData.zip} onChange={handleChange} placeholder="380001" half />
                                    <InputField label="Street Address *" name="address" value={formData.address} onChange={handleChange} placeholder="House No., Street, Area" />
                                    <InputField label="City *" name="city" value={formData.city} onChange={handleChange} placeholder="Ahmedabad" half />
                                    <InputField label="State *" name="state" value={formData.state} onChange={handleChange} placeholder="Gujarat" half />
                                    <InputField label="Country" name="country" value={formData.country} onChange={handleChange} placeholder="India" half />
                                </div>

                                <div className="ck-delivery-info">
                                    <Truck size={16} />
                                    <span>Free delivery on orders above <strong>₹999</strong> · Arrives in 5–7 days</span>
                                </div>

                                <button
                                    className="ck-btn ck-btn--primary ck-btn--full"
                                    onClick={() => setStep(2)}
                                    disabled={!formData.name || !formData.address || !formData.city}
                                >
                                    Continue to Payment <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}

                        {/* STEP 2: Payment */}
                        {step === 2 && (
                            <motion.div key="payment" className="ck-card" {...fadeSlide}>
                                <div className="ck-card__head">
                                    <CreditCard size={20} className="ck-card__icon" />
                                    <h2>Payment Method</h2>
                                </div>

                                {/* Method selector */}
                                <div className="ck-pay-methods">
                                    {PAYMENT_METHODS.map(m => {
                                        const Icon = m.icon;
                                        return (
                                            <label key={m.id} className={`ck-pay-method ${payMethod === m.id ? 'selected' : ''}`}>
                                                <input type="radio" name="pay" value={m.id} checked={payMethod === m.id} onChange={() => setPayMethod(m.id)} />
                                                <div className="ck-pay-method__icon"><Icon size={20} /></div>
                                                <div className="ck-pay-method__text">
                                                    <span className="ck-pay-method__name">{m.label}</span>
                                                    <span className="ck-pay-method__desc">{m.desc}</span>
                                                </div>
                                                {payMethod === m.id && <div className="ck-pay-method__check"><Check size={14} /></div>}
                                            </label>
                                        );
                                    })}
                                </div>

                                {/* Card details (only if card selected) */}
                                <AnimatePresence>
                                    {payMethod === 'card' && (
                                        <motion.div
                                            key="card-fields"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="ck-card-fields"
                                        >
                                            <div className="ck-card-visual">
                                                <div className="ck-card-vis__chip" />
                                                <div className="ck-card-vis__number">
                                                    {(formData.cardNumber || '•••• •••• •••• ••••').replace(/(\d{4})(?=\d)/g, '$1 ')}
                                                </div>
                                                <div className="ck-card-vis__bottom">
                                                    <span>{formData.cardName || 'CARD HOLDER'}</span>
                                                    <span>{formData.expiry || 'MM/YY'}</span>
                                                </div>
                                            </div>
                                            <div className="ck-fields">
                                                <div className="ck-field">
                                                    <label className="ck-label">Card Number *</label>
                                                    <input className="ck-input" name="cardNumber" maxLength={16}
                                                        value={formData.cardNumber} onChange={handleChange}
                                                        placeholder="1234 5678 9012 3456" />
                                                </div>
                                                <InputField label="Name on Card *" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="John Doe" />
                                                <InputField label="Expiry (MM/YY) *" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" half />
                                                <InputField label="CVV *" name="cvv" type="password" value={formData.cvv} onChange={handleChange} placeholder="•••" half />
                                            </div>
                                        </motion.div>
                                    )}
                                    {payMethod === 'upi' && (
                                        <motion.div key="upi-fields" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ck-card-fields">
                                            <InputField label="UPI ID *" name="upiId" value={formData.upiId} onChange={handleChange} placeholder="name@upi" />
                                        </motion.div>
                                    )}
                                    {payMethod === 'cod' && (
                                        <motion.div key="cod-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ck-cod-info">
                                            <Wallet size={28} />
                                            <p>Pay <strong>₹{total.toLocaleString()}</strong> in cash when your order is delivered. No extra charges.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="ck-btn-row">
                                    <button className="ck-btn ck-btn--ghost" onClick={() => setStep(1)}>
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                    <button className="ck-btn ck-btn--primary" onClick={() => setStep(3)}>
                                        Review Order <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Review & Place Order */}
                        {step === 3 && (
                            <motion.div key="review" className="ck-card" {...fadeSlide}>
                                <div className="ck-card__head">
                                    <ShieldCheck size={20} className="ck-card__icon" />
                                    <h2>Review & Confirm</h2>
                                </div>

                                {/* Delivery review */}
                                <div className="ck-review-block">
                                    <div className="ck-review-block__head">
                                        <MapPin size={15} /> Delivering To
                                        <button className="ck-review-edit" onClick={() => setStep(1)}>Edit</button>
                                    </div>
                                    <p className="ck-review-block__val">{formData.name}</p>
                                    <p className="ck-review-block__val ck-text-muted">{formData.address}, {formData.city}, {formData.zip}</p>
                                    <p className="ck-review-block__val ck-text-muted">{formData.phone}</p>
                                </div>

                                {/* Payment review */}
                                <div className="ck-review-block">
                                    <div className="ck-review-block__head">
                                        <CreditCard size={15} /> Payment
                                        <button className="ck-review-edit" onClick={() => setStep(2)}>Edit</button>
                                    </div>
                                    <p className="ck-review-block__val">
                                        {payMethod === 'card' && `Card •••• ${formData.cardNumber.slice(-4) || '****'}`}
                                        {payMethod === 'upi' && `UPI — ${formData.upiId || 'N/A'}`}
                                        {payMethod === 'netbanking' && 'Net Banking'}
                                        {payMethod === 'cod' && 'Cash on Delivery'}
                                    </p>
                                </div>

                                {/* Items review */}
                                <div className="ck-review-items">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="ck-review-item">
                                            <img src={item.image1 || item.img} alt={item.name} className="ck-review-item__img" />
                                            <div className="ck-review-item__info">
                                                <span className="ck-review-item__name">{item.name}</span>
                                                <span className="ck-review-item__meta">Qty: {item.quantity}</span>
                                            </div>
                                            <span className="ck-review-item__price">₹{(item.price * item.quantity).toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="ck-secure-badge">
                                    <Lock size={14} /> Your data is encrypted and secure
                                </div>

                                <div className="ck-btn-row">
                                    <button className="ck-btn ck-btn--ghost" onClick={() => setStep(2)}>
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                    <button
                                        className={`ck-btn ck-btn--place ${placing ? 'loading' : ''}`}
                                        onClick={handlePlaceOrder}
                                        disabled={placing}
                                    >
                                        {placing ? (
                                            <><span className="ck-spinner" /> Processing…</>
                                        ) : (
                                            <>Place Order · ₹{total.toLocaleString()} <ShieldCheck size={18} /></>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* RIGHT — Order Summary */}
                <div className="ck-right">
                    <div className="ck-summary">
                        <h3 className="ck-summary__title">Order Summary</h3>

                        <div className="ck-summary__items">
                            {cartItems.map(item => (
                                <div key={item.id} className="ck-summary__item">
                                    <div className="ck-summary__item-img-wrap">
                                        <img src={item.image1 || item.img} alt={item.name} className="ck-summary__item-img" />
                                        <span className="ck-summary__item-qty">{item.quantity}</span>
                                    </div>
                                    <div className="ck-summary__item-info">
                                        <p className="ck-summary__item-name">{item.name}</p>
                                        {item.selectedSize && <p className="ck-summary__item-meta">Size: {item.selectedSize}</p>}
                                    </div>
                                    <span className="ck-summary__item-price">₹{(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        {/* Coupon */}
                        <div className="ck-coupon">
                            <Tag size={16} className="ck-coupon__icon" />
                            <input
                                className="ck-coupon__input"
                                placeholder="Coupon code — try MODA10"
                                value={coupon}
                                onChange={e => setCoupon(e.target.value)}
                                disabled={couponApplied}
                            />
                            <button className="ck-coupon__btn" onClick={applyCoupon} disabled={couponApplied}>
                                {couponApplied ? '✓' : 'Apply'}
                            </button>
                        </div>
                        {couponApplied && (
                            <p className="ck-coupon__success">🎉 MODA10 applied — 10% off!</p>
                        )}

                        {/* Totals */}
                        <div className="ck-summary__rows">
                            <div className="ck-summary__row">
                                <span>Subtotal ({cartItems.reduce((a, i) => a + i.quantity, 0)} items)</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            {couponApplied && (
                                <div className="ck-summary__row ck-summary__row--discount">
                                    <span>Discount (MODA10)</span>
                                    <span>− ₹{discount.toLocaleString()}</span>
                                </div>
                            )}
                            <div className="ck-summary__row">
                                <span>Delivery</span>
                                <span className={shipping === 0 ? 'ck-free' : ''}>
                                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                                </span>
                            </div>
                            <div className="ck-summary__total">
                                <span>Total</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="ck-trust">
                            <div className="ck-trust__item"><Truck size={16} /> Free delivery above ₹999</div>
                            <div className="ck-trust__item"><ShieldCheck size={16} /> 7-day easy returns</div>
                            <div className="ck-trust__item"><Lock size={16} /> Secure 256-bit SSL</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
