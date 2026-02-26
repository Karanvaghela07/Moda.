import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Check, Clock, Truck, Download, ChevronRight } from 'lucide-react';
import '../styles/order-history.css';
import { generateInvoice } from '../utils/invoiceGenerator.jsx';
import { getUserOrders } from '../data/ordersData';
import { useAuth } from '../context/AuthContext';

const OrderHistory = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // Only show this user's orders — empty array for new/unknown users
    const rawOrders = getUserOrders(currentUser?.email);
    const orders = rawOrders.map(o => ({
        id: o.id,
        date: o.date,
        total: o.total.toLocaleString(),
        status: o.status,
        items: o.items.map(item => ({ name: item.name, img: item.img }))
    }));

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered': return <Check size={14} />;
            case 'Processing': return <Clock size={14} />;
            case 'Shipped': return <Truck size={14} />;
            default: return <Package size={14} />;
        }
    };

    return (
        <div className="order-history-page">
            <div className="container">
                <div className="order-history-header">
                    <h1 className="order-history-title">My Orders</h1>
                    <p className="order-history-subtitle">View and track your current and past orders.</p>
                </div>

                <div className="order-grid">
                    {orders.map((order, index) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="rich-order-card"
                        >
                            {/* Header */}
                            <div className="card-header">
                                <div className="order-id-group">
                                    <span className="order-id">#{order.id}</span>
                                    <span className="order-date">{order.date}</span>
                                </div>
                                <div className={`status-badge ${order.status.toLowerCase()}`}>
                                    {getStatusIcon(order.status)}
                                    {order.status}
                                </div>
                            </div>

                            {/* Products (No Timeline) */}
                            <div className="card-products">
                                {order.items.slice(0, 3).map((item, i) => (
                                    <img key={i} src={item.img} alt={item.name} className="product-thumb-large" title={item.name} />
                                ))}
                                {order.items.length > 3 && (
                                    <div className="more-items">+{order.items.length - 3}</div>
                                )}
                            </div>

                            {/* Footer & Actions */}
                            <div className="card-footer">
                                <div>
                                    <span className="total-label">Total Amount</span>
                                    <span className="total-value">₹{order.total}</span>
                                </div>
                                <div className="action-buttons">
                                    <button
                                        className="btn-outline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            generateInvoice(order);
                                        }}
                                    >
                                        <Download size={16} /> Invoice
                                    </button>
                                    <Link to={`/order/${order.id}`} className="btn-primary-sm">
                                        Track <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default OrderHistory;
