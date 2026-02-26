import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Facebook, Twitter, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        await new Promise(r => setTimeout(r, 500));
        const result = await signup(name.trim(), email.trim(), password);
        setLoading(false);
        if (result.success) {
            navigate('/account');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-image-side">
                <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2340&auto=format&fit=crop"
                    alt="Fashion Editorial"
                    crossOrigin="anonymous"
                />
                <div className="auth-overlay">
                    <div className="auth-quote">
                        <h2>Create<br />The Future.</h2>
                        <p>Fashion is just the beginning.</p>
                    </div>
                </div>
            </div>

            <div className="auth-form-side">
                <Link to="/" className="back-home">
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div className="auth-container">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="auth-header">
                            <h1 className="auth-title">Join The Club</h1>
                            <p className="auth-subtitle">Start your journey with Moda.</p>
                        </div>

                        {/* Error — if email exists, show link to login */}
                        {error && (
                            <motion.div
                                className="auth-error"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertCircle size={16} />
                                <span>
                                    {error}
                                    {error.includes('already exists') && (
                                        <> &nbsp;<Link to="/login" className="auth-error-link">Log in instead →</Link></>
                                    )}
                                </span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSignup} autoComplete="on">
                            <div className="auth-form-group">
                                <input
                                    id="signup-name"
                                    name="name"
                                    type="text"
                                    className="auth-input"
                                    placeholder=" "
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    autoComplete="name"
                                    required
                                />
                                <label className="auth-label" htmlFor="signup-name">Full Name</label>
                            </div>
                            <div className="auth-form-group">
                                <input
                                    id="signup-email"
                                    name="email"
                                    type="email"
                                    className="auth-input"
                                    placeholder=" "
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                    required
                                />
                                <label className="auth-label" htmlFor="signup-email">Email Address</label>
                            </div>
                            <div className="auth-form-group">
                                <input
                                    id="signup-password"
                                    name="password"
                                    type="password"
                                    className="auth-input"
                                    placeholder=" "
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    required
                                    minLength={6}
                                />
                                <label className="auth-label" htmlFor="signup-password">Create Password</label>
                            </div>

                            <button type="submit" className="auth-btn" disabled={loading}>
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="social-login">
                            <div className="divider"><span>Or signup with</span></div>
                            <div className="social-btns">
                                <div className="social-btn">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="22" />
                                </div>
                                <div className="social-btn"><Facebook size={20} color="#111" /></div>
                                <div className="social-btn"><Twitter size={20} color="#111" /></div>
                            </div>
                        </div>

                        <div className="auth-footer">
                            Already a member?
                            <Link to="/login" className="auth-link"> Log In</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
