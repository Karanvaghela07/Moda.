import React from 'react';
import '../styles/invoice.css';

const Invoice = ({ order }) => {
    // Generate random mock data for SKU/Barcode if missing
    const getRandomSKU = () => `SKU-${Math.floor(Math.random() * 10000)}`;

    return (
        <div className="invoice-container">
            {/* Header */}
            {/* Header */}
            <header className="inv-header">
                <div className="inv-brand">
                    {/* Using the exact logo style requested */}
                    <div className="inv-logo-container" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/logo.svg"
                            alt="The Indie Store"
                            style={{ height: '80px', objectFit: 'contain' }}
                        />
                    </div>
                </div>
                <div className="inv-title">
                    <h2>Invoice</h2>
                    <span>#{order.id}</span>
                </div>
            </header>

            {/* Meta Info */}
            <div className="inv-meta">
                <div className="meta-group">
                    <h3>Billed To</h3>
                    <p className="highlight">Vaghela</p>
                    <p>123 Fashion Avenue</p>
                    <p>Mumbai, MH 400001</p>
                    <p>India</p>
                </div>
                <div className="meta-group">
                    <h3>Shipped To</h3>
                    <p>Same as billing address</p>
                </div>
                <div className="meta-group">
                    <h3>Order Details</h3>
                    <p>Date: {order.date}</p>
                    <p>Status: <span style={{ color: '#e11b23' }}>{order.status}</span></p>
                    <p>Payment: On Delivery</p>
                </div>
            </div>

            {/* Items Table */}
            <div className="inv-body">
                <table className="inv-table">
                    <thead>
                        <tr>
                            <th>Item Description</th>
                            <th className="qty">Qty</th>
                            <th className="price">Price</th>
                            <th className="price">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map((item, index) => {
                            // Calculate approximate price per item from total since mock data doesn't have it
                            const itemPrice = Math.round(parseInt(order.total.replace(/,/g, '')) / order.items.length);
                            return (
                                <tr key={index}>
                                    <td>
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-sku">{getRandomSKU()}</span>
                                    </td>
                                    <td className="qty">1</td>
                                    <td className="price">₹{itemPrice.toLocaleString()}</td>
                                    <td className="price">₹{itemPrice.toLocaleString()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Summary */}
            <div className="inv-summary">
                <div className="summary-box">
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{order.total}</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax (18%)</span>
                        <span>₹0.00</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{order.total}</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="inv-footer">
                <div className="inv-message">
                    Welcome to the Cult.
                </div>
                <div className="inv-contact">
                    <p>www.theindiestore.com</p>
                    <p>support@theindiestore.com</p>
                </div>
            </footer>
        </div>
    );
};

export default Invoice;
