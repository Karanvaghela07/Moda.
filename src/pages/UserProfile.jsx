import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Package, MapPin, CreditCard, LogOut,
    ShoppingBag, ChevronRight, Settings, Sparkles,
    Plus, Trash2, Edit2, Check, Clock, Truck,
    Download, Bell, Lock, Eye, EyeOff, X, Home, Briefcase
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { generateInvoice } from '../utils/invoiceGenerator.jsx';
import { getUserOrders } from '../data/ordersData';
import '../styles/account.css';

/* ── helpers ─────────────────────────────────────────────────────────────── */

const getStatusIcon = (s) => {
    if (s === 'Delivered') return <Check size={13} />;
    if (s === 'Shipped') return <Truck size={13} />;
    if (s === 'Processing') return <Clock size={13} />;
    return <Package size={13} />;
};

const statusColor = {
    Delivered: { bg: '#e6f4ea', color: '#1e7e34' },
    Shipped: { bg: '#e3f2fd', color: '#1565c0' },
    Processing: { bg: '#fff3e0', color: '#e65100' },
};

const Toast = ({ message, type = 'success', onDone }) => {
    useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, [onDone]);
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            style={{
                position: 'fixed', bottom: '2rem', right: '2rem',
                background: type === 'success' ? '#111' : '#e11b23',
                color: '#fff', padding: '0.85rem 1.5rem',
                borderRadius: 10, fontSize: '0.9rem', fontWeight: 600,
                boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                zIndex: 9999, display: 'flex', alignItems: 'center', gap: 8,
            }}
        >
            {type === 'success' ? <Check size={16} /> : <X size={16} />}
            {message}
        </motion.div>
    );
};

/* ── main component ──────────────────────────────────────────────────────── */
const UserProfile = () => {
    const navigate = useNavigate();
    const { currentUser, loading, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [logoutHover, setLogoutHover] = useState(false);
    const [toast, setToast] = useState(null);

    // ── profile form state
    const [profileForm, setProfileForm] = useState({ name: '', phone: '' });
    useEffect(() => {
        if (currentUser) setProfileForm({ name: currentUser.name || '', phone: currentUser.phone || '' });
    }, [currentUser]);

    // ── addresses state
    const [addresses, setAddresses] = useState([
        { id: 1, label: 'Home', line1: '12, Shanti Nagar', line2: 'Ahmedabad, Gujarat 380001', phone: '9876543210', default: true },
        { id: 2, label: 'Work', line1: '403, Business Hub', line2: 'Surat, Gujarat 395001', phone: '9123456780', default: false },
    ]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [addrForm, setAddrForm] = useState({ label: 'Home', line1: '', line2: '', phone: '' });

    // ── payment state
    const [cards, setCards] = useState([
        { id: 1, brand: 'Visa', last4: '4242', expiry: '08/27', default: true },
        { id: 2, brand: 'Mastercard', last4: '5555', expiry: '12/26', default: false },
    ]);
    const [showCardForm, setShowCardForm] = useState(false);
    const [cardForm, setCardForm] = useState({ number: '', name: '', expiry: '', cvv: '' });

    // ── settings state
    const [settingsName, setSettingsName] = useState('');
    const [pwForm, setPwForm] = useState({ current: '', next: '', confirm: '' });
    const [showPw, setShowPw] = useState({ current: false, next: false, confirm: false });
    const [notifs, setNotifs] = useState({ orders: true, promos: false, news: true });
    useEffect(() => { if (currentUser) setSettingsName(currentUser.name || ''); }, [currentUser]);

    const showToast = (msg, type = 'success') => setToast({ msg, type });

    /* ── guards ────────────────────────────────────────────────────────────── */
    if (loading) {
        return (
            <div className="account-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    style={{ width: 40, height: 40, border: '3px solid #eee', borderTopColor: '#e11b23', borderRadius: '50%' }}
                />
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="account-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
                    <h2 style={{ fontFamily: 'Syncopate, sans-serif', fontSize: '1.5rem', marginBottom: '0.75rem' }}>Members Only</h2>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Please log in to access your account.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/login" style={{ padding: '0.75rem 2rem', background: '#111', color: '#fff', textDecoration: 'none', fontFamily: 'Syncopate, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}>LOGIN</Link>
                        <Link to="/signup" style={{ padding: '0.75rem 2rem', border: '1.5px solid #111', color: '#111', textDecoration: 'none', fontFamily: 'Syncopate, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}>SIGN UP</Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    const handleLogout = () => { logout(); navigate('/'); };

    const initials = currentUser.name
        .split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

    const sidebarItems = [
        { id: 'dashboard', label: 'Overview', icon: <User size={20} /> },
        { id: 'orders', label: 'My Orders', icon: <Package size={20} /> },
        { id: 'addresses', label: 'Addresses', icon: <MapPin size={20} /> },
        { id: 'payment', label: 'Payment Methods', icon: <CreditCard size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];

    /* ── address helpers ───────────────────────────────────────────────────── */
    const openNewAddress = () => {
        setEditingAddress(null);
        setAddrForm({ label: 'Home', line1: '', line2: '', phone: '' });
        setShowAddressForm(true);
    };
    const openEditAddress = (addr) => {
        setEditingAddress(addr.id);
        setAddrForm({ label: addr.label, line1: addr.line1, line2: addr.line2, phone: addr.phone });
        setShowAddressForm(true);
    };
    const saveAddress = () => {
        if (!addrForm.line1 || !addrForm.line2) return showToast('Please fill in both address lines.', 'error');
        if (editingAddress) {
            setAddresses(prev => prev.map(a => a.id === editingAddress ? { ...a, ...addrForm } : a));
            showToast('Address updated!');
        } else {
            setAddresses(prev => [...prev, { id: Date.now(), ...addrForm, default: false }]);
            showToast('Address added!');
        }
        setShowAddressForm(false);
    };
    const deleteAddress = (id) => {
        setAddresses(prev => prev.filter(a => a.id !== id));
        showToast('Address removed.');
    };
    const setDefaultAddress = (id) => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === id })));

    /* ── card helpers ──────────────────────────────────────────────────────── */
    const saveCard = () => {
        if (cardForm.number.length < 16 || !cardForm.name || cardForm.expiry.length < 5 || cardForm.cvv.length < 3)
            return showToast('Please fill in all card details correctly.', 'error');
        const brand = cardForm.number.startsWith('4') ? 'Visa' : 'Mastercard';
        setCards(prev => [...prev, { id: Date.now(), brand, last4: cardForm.number.slice(-4), expiry: cardForm.expiry, default: false }]);
        setCardForm({ number: '', name: '', expiry: '', cvv: '' });
        setShowCardForm(false);
        showToast('Card added successfully!');
    };
    const deleteCard = (id) => { setCards(prev => prev.filter(c => c.id !== id)); showToast('Card removed.'); };
    const setDefaultCard = (id) => setCards(prev => prev.map(c => ({ ...c, default: c.id === id })));

    /* ── settings save ─────────────────────────────────────────────────────── */
    const saveSettings = () => {
        if (!settingsName.trim()) return showToast('Name cannot be empty.', 'error');
        showToast('Settings saved!');
    };
    const changePassword = () => {
        if (!pwForm.current) return showToast('Enter your current password.', 'error');
        if (pwForm.next.length < 6) return showToast('New password must be at least 6 characters.', 'error');
        if (pwForm.next !== pwForm.confirm) return showToast('Passwords do not match.', 'error');
        setPwForm({ current: '', next: '', confirm: '' });
        showToast('Password updated!');
    };

    /* ── tab content ─────────────────────────────────────────────────────── */
    const tabVariants = {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
    };

    const renderDashboard = () => {
        const userOrders = getUserOrders(currentUser.email);
        const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0);
        const processingCount = userOrders.filter(o => o.status === 'Processing').length;

        return (
            <motion.div key="dashboard" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                {/* Welcome */}
                <div className="dashboard-header">
                    <h1 className="welcome-text">Hello, <span style={{ color: '#e11b23' }}>{currentUser.name.split(' ')[0]}</span> 👋</h1>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>Here's what's happening with your account.</p>
                </div>

                {/* Stats */}
                <div className="dashboard-grid">
                    {[
                        { icon: <ShoppingBag size={24} />, val: userOrders.length, label: 'Total Orders', bg: '#fef2f2', col: '#e11b23' },
                        { icon: <Package size={24} />, val: processingCount, label: 'Processing', bg: '#e3f2fd', col: '#1976d2' },
                        { icon: <CreditCard size={24} />, val: totalSpent >= 1000 ? `₹${(totalSpent / 1000).toFixed(1)}k` : `₹${totalSpent}`, label: 'Total Spent', bg: '#e8f5e9', col: '#2e7d32' },
                    ].map((s, i) => (
                        <motion.div className="stats-card" key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                            <div className="stats-icon" style={{ background: s.bg, color: s.col }}>{s.icon}</div>
                            <div className="stats-info"><h3>{s.val}</h3><p>{s.label}</p></div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Orders */}
                <div>
                    <div className="section-title">
                        Recent Orders
                        <button className="view-all-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => setActiveTab('orders')}>View All</button>
                    </div>
                    {userOrders.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#aaa' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
                            <p style={{ fontWeight: 600 }}>No orders yet</p>
                            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Start shopping to see your orders here.</p>
                            <Link to="/shop" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.7rem 1.8rem', background: '#111', color: '#fff', borderRadius: 8, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Browse Shop</Link>
                        </div>
                    ) : (
                        <div className="recent-orders-list">
                            {userOrders.slice(0, 3).map(order => (
                                <Link to={`/order/${order.id}`} key={order.id} className="order-row">
                                    <div><div className="order-id">#{order.id}</div><div className="order-date">{order.date}</div></div>
                                    <div className="order-status" style={statusColor[order.status] || {}}>{order.status}</div>
                                    <div className="order-total">₹{order.total.toLocaleString()}</div>
                                    <ChevronRight size={18} color="#ccc" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Profile Form */}
                <div className="profile-card">
                    <div className="section-title">Personal Information</div>
                    <div className="form-split">
                        <div className="profile-input-group">
                            <label className="profile-label">Full Name</label>
                            <input type="text" value={profileForm.name} onChange={e => setProfileForm(p => ({ ...p, name: e.target.value }))} className="profile-input" />
                        </div>
                        <div className="profile-input-group">
                            <label className="profile-label">Email Address</label>
                            <input type="email" value={currentUser.email} className="profile-input" readOnly disabled style={{ background: '#eee', cursor: 'not-allowed' }} />
                        </div>
                        <div className="profile-input-group">
                            <label className="profile-label">Phone Number</label>
                            <input type="tel" value={profileForm.phone} onChange={e => setProfileForm(p => ({ ...p, phone: e.target.value }))} className="profile-input" placeholder="+91 00000 00000" />
                        </div>
                    </div>
                    <button className="save-btn" onClick={() => showToast('Profile saved!')}>Save Changes</button>
                </div>
            </motion.div>
        );
    };

    const renderOrders = () => {
        const userOrders = getUserOrders(currentUser.email);
        return (
            <motion.div key="orders" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                <div className="dashboard-header">
                    <h1 className="welcome-text">My <span style={{ color: '#e11b23' }}>Orders</span></h1>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>{userOrders.length} order{userOrders.length !== 1 ? 's' : ''} in total</p>
                </div>
                {userOrders.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#aaa' }}>
                        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🛍️</div>
                        <p style={{ fontWeight: 600, color: '#555' }}>You haven't placed any orders yet.</p>
                        <Link to="/shop" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', background: '#111', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Start Shopping</Link>
                    </div>
                ) : (
                    <div className="orders-tab-list">
                        {userOrders.map((order, i) => (
                            <motion.div key={order.id} className="order-tab-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                                <div className="otc-header">
                                    <div>
                                        <span className="order-id">#{order.id}</span>
                                        <span className="order-date" style={{ marginLeft: 12 }}>{order.date}</span>
                                    </div>
                                    <span className="order-status" style={statusColor[order.status] || {}}>
                                        {getStatusIcon(order.status)}&nbsp;{order.status}
                                    </span>
                                </div>
                                <div className="otc-thumbs">
                                    {order.items.map((item, j) => (
                                        <img key={j} src={item.img} alt={item.name} className="otc-thumb" title={item.name} />
                                    ))}
                                </div>
                                <div className="otc-footer">
                                    <strong style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '1.1rem' }}>₹{order.total.toLocaleString()}</strong>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <button className="otc-btn-outline" onClick={() => generateInvoice({ ...order, total: order.total.toLocaleString(), items: order.items.map(it => ({ name: it.name, img: it.img })) })}>
                                            <Download size={14} /> Invoice
                                        </button>
                                        <Link to={`/order/${order.id}`} className="otc-btn-primary">
                                            Track <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        );
    };

    const renderAddresses = () => (
        <motion.div key="addresses" variants={tabVariants} initial="initial" animate="animate" exit="exit">
            <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className="welcome-text">My <span style={{ color: '#e11b23' }}>Addresses</span></h1>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>Manage your delivery addresses</p>
                </div>
                <button className="save-btn" style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={openNewAddress}>
                    <Plus size={16} /> Add Address
                </button>
            </div>

            <div className="addr-grid">
                {addresses.map(addr => (
                    <div key={addr.id} className={`addr-card ${addr.default ? 'addr-default' : ''}`}>
                        <div className="addr-card-head">
                            <span className="addr-label">
                                {addr.label === 'Home' ? <Home size={14} /> : <Briefcase size={14} />}
                                &nbsp;{addr.label}
                                {addr.default && <span className="addr-default-badge">Default</span>}
                            </span>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <button className="addr-icon-btn" onClick={() => openEditAddress(addr)} title="Edit"><Edit2 size={15} /></button>
                                <button className="addr-icon-btn danger" onClick={() => deleteAddress(addr.id)} title="Delete"><Trash2 size={15} /></button>
                            </div>
                        </div>
                        <p className="addr-text">{addr.line1}</p>
                        <p className="addr-text">{addr.line2}</p>
                        <p className="addr-phone">{addr.phone}</p>
                        {!addr.default && (
                            <button className="addr-set-default" onClick={() => setDefaultAddress(addr.id)}>Set as Default</button>
                        )}
                    </div>
                ))}
            </div>

            {/* Address Form Modal */}
            <AnimatePresence>
                {showAddressForm && (
                    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddressForm(false)}>
                        <motion.div className="modal-box" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>{editingAddress ? 'Edit Address' : 'Add New Address'}</h3>
                                <button className="modal-close" onClick={() => setShowAddressForm(false)}><X size={18} /></button>
                            </div>
                            <div className="modal-body">
                                <div className="profile-input-group">
                                    <label className="profile-label">Label</label>
                                    <select className="profile-input" value={addrForm.label} onChange={e => setAddrForm(p => ({ ...p, label: e.target.value }))}>
                                        <option>Home</option>
                                        <option>Work</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="profile-input-group">
                                    <label className="profile-label">Address Line 1</label>
                                    <input className="profile-input" value={addrForm.line1} onChange={e => setAddrForm(p => ({ ...p, line1: e.target.value }))} placeholder="Street, Building, Flat No." />
                                </div>
                                <div className="profile-input-group">
                                    <label className="profile-label">Address Line 2</label>
                                    <input className="profile-input" value={addrForm.line2} onChange={e => setAddrForm(p => ({ ...p, line2: e.target.value }))} placeholder="City, State, PIN" />
                                </div>
                                <div className="profile-input-group">
                                    <label className="profile-label">Phone</label>
                                    <input className="profile-input" value={addrForm.phone} onChange={e => setAddrForm(p => ({ ...p, phone: e.target.value }))} placeholder="10-digit mobile number" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, padding: '0 1.5rem 1.5rem' }}>
                                <button className="save-btn" onClick={saveAddress}>Save Address</button>
                                <button className="save-btn" style={{ background: '#eee', color: '#333' }} onClick={() => setShowAddressForm(false)}>Cancel</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    const renderPayment = () => (
        <motion.div key="payment" variants={tabVariants} initial="initial" animate="animate" exit="exit">
            <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className="welcome-text">Payment <span style={{ color: '#e11b23' }}>Methods</span></h1>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>Manage your saved cards</p>
                </div>
                <button className="save-btn" style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setShowCardForm(true)}>
                    <Plus size={16} /> Add Card
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cards.map(card => (
                    <div key={card.id} className={`pay-card-row ${card.default ? 'pay-card-default' : ''}`}>
                        <div className="pay-card-brand-wrap">
                            <div className="pay-brand-icon">{card.brand === 'Visa' ? '💳' : '💳'}</div>
                            <div>
                                <div style={{ fontWeight: 700, color: '#111' }}>{card.brand} •••• {card.last4}</div>
                                <div style={{ fontSize: '0.82rem', color: '#888' }}>Expires {card.expiry}</div>
                            </div>
                            {card.default && <span className="addr-default-badge" style={{ marginLeft: 10 }}>Default</span>}
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {!card.default && <button className="addr-set-default" onClick={() => setDefaultCard(card.id)}>Set Default</button>}
                            <button className="addr-icon-btn danger" onClick={() => deleteCard(card.id)}><Trash2 size={15} /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Card Modal */}
            <AnimatePresence>
                {showCardForm && (
                    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowCardForm(false)}>
                        <motion.div className="modal-box" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>Add New Card</h3>
                                <button className="modal-close" onClick={() => setShowCardForm(false)}><X size={18} /></button>
                            </div>
                            <div className="modal-body">
                                <div className="profile-input-group">
                                    <label className="profile-label">Card Number</label>
                                    <input className="profile-input" maxLength={16} value={cardForm.number} onChange={e => setCardForm(p => ({ ...p, number: e.target.value.replace(/\D/, '') }))} placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="profile-input-group">
                                    <label className="profile-label">Cardholder Name</label>
                                    <input className="profile-input" value={cardForm.name} onChange={e => setCardForm(p => ({ ...p, name: e.target.value }))} placeholder="Name on card" />
                                </div>
                                <div className="form-split">
                                    <div className="profile-input-group">
                                        <label className="profile-label">Expiry (MM/YY)</label>
                                        <input className="profile-input" maxLength={5} value={cardForm.expiry} onChange={e => {
                                            let v = e.target.value.replace(/[^\d/]/g, '');
                                            if (v.length === 2 && cardForm.expiry.length === 1) v += '/';
                                            setCardForm(p => ({ ...p, expiry: v }));
                                        }} placeholder="MM/YY" />
                                    </div>
                                    <div className="profile-input-group">
                                        <label className="profile-label">CVV</label>
                                        <input className="profile-input" maxLength={4} type="password" value={cardForm.cvv} onChange={e => setCardForm(p => ({ ...p, cvv: e.target.value.replace(/\D/, '') }))} placeholder="•••" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, padding: '0 1.5rem 1.5rem' }}>
                                <button className="save-btn" onClick={saveCard}>Save Card</button>
                                <button className="save-btn" style={{ background: '#eee', color: '#333' }} onClick={() => setShowCardForm(false)}>Cancel</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    const renderSettings = () => (
        <motion.div key="settings" variants={tabVariants} initial="initial" animate="animate" exit="exit" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="dashboard-header">
                <h1 className="welcome-text">Account <span style={{ color: '#e11b23' }}>Settings</span></h1>
                <p style={{ color: '#666', marginTop: '0.5rem' }}>Manage your preferences</p>
            </div>

            {/* Profile Settings */}
            <div className="profile-card">
                <div className="section-title">Profile Details</div>
                <div className="profile-input-group">
                    <label className="profile-label">Display Name</label>
                    <input className="profile-input" value={settingsName} onChange={e => setSettingsName(e.target.value)} />
                </div>
                <div className="profile-input-group">
                    <label className="profile-label">Email</label>
                    <input className="profile-input" value={currentUser.email} readOnly disabled style={{ background: '#eee', cursor: 'not-allowed' }} />
                </div>
                <button className="save-btn" onClick={saveSettings}>Update Profile</button>
            </div>

            {/* Change Password */}
            <div className="profile-card">
                <div className="section-title"><Lock size={18} style={{ marginRight: 8 }} />Change Password</div>
                {[
                    { field: 'current', label: 'Current Password' },
                    { field: 'next', label: 'New Password' },
                    { field: 'confirm', label: 'Confirm New Password' },
                ].map(({ field, label }) => (
                    <div className="profile-input-group" key={field} style={{ position: 'relative' }}>
                        <label className="profile-label">{label}</label>
                        <input
                            className="profile-input"
                            type={showPw[field] ? 'text' : 'password'}
                            value={pwForm[field]}
                            onChange={e => setPwForm(p => ({ ...p, [field]: e.target.value }))}
                            placeholder="••••••••"
                            style={{ paddingRight: '2.5rem' }}
                        />
                        <button
                            onClick={() => setShowPw(p => ({ ...p, [field]: !p[field] }))}
                            style={{ position: 'absolute', right: 12, top: 38, background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
                        >
                            {showPw[field] ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                ))}
                <button className="save-btn" onClick={changePassword}>Update Password</button>
            </div>

            {/* Notifications */}
            <div className="profile-card">
                <div className="section-title"><Bell size={18} style={{ marginRight: 8 }} />Notifications</div>
                {[
                    { key: 'orders', label: 'Order Updates', desc: 'Shipping, tracking, delivery alerts' },
                    { key: 'promos', label: 'Promotions', desc: 'Sales, new arrivals, and exclusive offers' },
                    { key: 'news', label: 'Newsletter', desc: 'Style tips and editorial content' },
                ].map(({ key, label, desc }) => (
                    <div key={key} className="notif-row">
                        <div>
                            <div style={{ fontWeight: 700, color: '#111', fontSize: '0.95rem' }}>{label}</div>
                            <div style={{ fontSize: '0.82rem', color: '#888' }}>{desc}</div>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={notifs[key]} onChange={() => setNotifs(p => ({ ...p, [key]: !p[key] }))} />
                            <span className="toggle-slider" />
                        </label>
                    </div>
                ))}
                <button className="save-btn" style={{ marginTop: '0.5rem' }} onClick={() => showToast('Notification preferences saved!')}>Save Preferences</button>
            </div>

            {/* Danger Zone */}
            <div className="profile-card" style={{ borderColor: 'rgba(225,27,35,0.2)', background: '#fff8f8' }}>
                <div className="section-title" style={{ color: '#e11b23' }}>Danger Zone</div>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Once you delete your account, all your data will be permanently removed. This cannot be undone.
                </p>
                <button
                    style={{
                        background: 'transparent', color: '#e11b23', border: '1.5px solid #e11b23',
                        padding: '0.7rem 1.5rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#e11b23'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#e11b23'; }}
                    onClick={() => showToast('Please contact support to delete your account.', 'error')}
                >
                    Delete My Account
                </button>
            </div>
        </motion.div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return renderDashboard();
            case 'orders': return renderOrders();
            case 'addresses': return renderAddresses();
            case 'payment': return renderPayment();
            case 'settings': return renderSettings();
            default: return renderDashboard();
        }
    };

    return (
        <div className="account-page">
            <div className="account-container">
                {/* Sidebar */}
                <aside className="account-sidebar">
                    <div className="user-summary">
                        <motion.div
                            className="user-avatar"
                            whileHover={{ scale: 1.05 }}
                            style={{ background: 'linear-gradient(135deg, #111 0%, #444 100%)', boxShadow: '0 0 0 3px #fff, 0 0 0 5px #e11b23' }}
                        >
                            {initials}
                        </motion.div>
                        <h2 className="user-name">{currentUser.name}</h2>
                        <p className="user-email">{currentUser.email}</p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fff8e7', color: '#b8860b', fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: 20, marginTop: '0.5rem', letterSpacing: '0.05em' }}>
                            <Sparkles size={12} /> Elite Member
                        </div>
                    </div>

                    <nav className="account-nav">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                            >
                                {item.icon}
                                {item.label}
                            </div>
                        ))}

                        <motion.button
                            className="logout-btn"
                            onClick={handleLogout}
                            onHoverStart={() => setLogoutHover(true)}
                            onHoverEnd={() => setLogoutHover(false)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="logout-icon-wrap"><LogOut size={18} /></span>
                            <span>Sign Out</span>
                            <motion.span className="logout-glow" animate={{ opacity: logoutHover ? 1 : 0 }} transition={{ duration: 0.2 }} />
                        </motion.button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="account-content">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </main>
            </div>

            {/* Toast */}
            <AnimatePresence>
                {toast && <Toast key="toast" message={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
            </AnimatePresence>
        </div>
    );
};

export default UserProfile;
