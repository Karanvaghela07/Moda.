import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/checkout.css';

const Checkout = () => {
    const { cartItems, placeOrder, cartCount } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = () => {
        const order = placeOrder(
            {
                name: formData.name,
                address: formData.address,
                city: formData.city,
                zip: formData.zip,
                country: formData.country
            },
            'Credit Card' // Mock payment method
        );
        navigate('/order-success', { state: { orderId: order.id } });
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-page" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="btn-primary" style={{ marginTop: '20px' }}>Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">

                {/* Left Column: Forms */}
                <div className="checkout-section">
                    <h1>Checkout</h1>

                    {step === 1 && (
                        <div>
                            <h3>Shipping Address</h3>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="checkout-input" />
                                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="checkout-input" />
                                <div className="form-row">
                                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="checkout-input" />
                                    <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="checkout-input" />
                                </div>
                                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="checkout-input" />

                                <button onClick={() => setStep(2)} className="btn-primary btn-full" style={{ marginTop: '2rem' }}>Continue to Payment</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3>Payment Details</h3>
                            <div className="form-group">
                                <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="checkout-input" />
                                <div className="form-row">
                                    <input type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} className="checkout-input" />
                                    <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} className="checkout-input" />
                                </div>

                                <div className="checkout-actions">
                                    <button onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1 }}>Back</button>
                                    <button onClick={handlePlaceOrder} className="btn-primary" style={{ flex: 1 }}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Order Summary */}
                <div className="order-summary-card">
                    <h3 className="summary-title">Order Summary</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item-row">
                                <div className="item-info">
                                    <img src={item.image1} alt={item.name} className="item-img" />
                                    <div className="item-details">
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-qty">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="total-row">
                            <span className="text-muted">Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="total-row">
                            <span className="text-muted">Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="total-row final">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
