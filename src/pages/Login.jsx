import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Facebook, Twitter, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        await new Promise(r => setTimeout(r, 500));
        const result = await login(email, password);
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
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2520&auto=format&fit=crop"
                    alt="Editorial Fashion"
                    crossOrigin="anonymous"
                />
                <div className="auth-overlay">
                    <div className="auth-quote">
                        <h2>Redefine<br />Your Vibe.</h2>
                        <p>Join the cult of premium streetwear.</p>
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
                            <h1 className="auth-title">Welcome Back</h1>
                            <p className="auth-subtitle">Log in to manage your empire.</p>
                        </div>

                        {error && (
                            <motion.div
                                className="auth-error"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertCircle size={16} />
                                <span>
                                    {error}
                                    {error.toLowerCase().includes('invalid') && (
                                        <> &nbsp;<Link to="/signup" className="auth-error-link">New here? Sign up →</Link></>
                                    )}
                                </span>
                            </motion.div>
                        )}

                        <form onSubmit={handleLogin} autoComplete="on">
                            <div className="auth-form-group">
                                <input
                                    id="login-email"
                                    name="email"
                                    type="email"
                                    className="auth-input"
                                    placeholder=" "
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                    required
                                />
                                <label className="auth-label" htmlFor="login-email">Email Address</label>
                            </div>
                            <div className="auth-form-group">
                                <input
                                    id="login-password"
                                    name="password"
                                    type="password"
                                    className="auth-input"
                                    placeholder=" "
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                />
                                <label className="auth-label" htmlFor="login-password">Password</label>
                            </div>

                            <div className="auth-options">
                                <label className="remember-me" htmlFor="remember">
                                    <input id="remember" name="remember" type="checkbox" /> Remember me
                                </label>
                                <span className="forgot-password">Forgot password?</span>
                            </div>

                            <button type="submit" className="auth-btn" disabled={loading}>
                                {loading ? 'Authenticating...' : 'Sign In'}
                            </button>
                        </form>

                        <div className="social-login">
                            <div className="divider"><span>Or access with</span></div>
                            <div className="social-btns">
                                <div className="social-btn">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="22" />
                                </div>
                                <div className="social-btn"><Facebook size={20} color="#111" /></div>
                                <div className="social-btn"><Twitter size={20} color="#111" /></div>
                            </div>
                        </div>

                        <div className="auth-footer">
                            New to the culture?
                            <Link to="/signup" className="auth-link"> Join Now</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Login;
