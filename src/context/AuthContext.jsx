import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    apiLogin, apiSignup, apiLogout, apiCheckSession,
    getStoredUser
} from '../utils/csvStorage';

// ── Context ───────────────────────────────────────────────────────────────────
const AuthContext = createContext(null);

// ── Provider ──────────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
    // Immediately hydrate from localStorage cache so UI never flashes "logged out"
    const [currentUser, setCurrentUser] = useState(() => getStoredUser());
    const [loading, setLoading] = useState(true);

    // On mount: verify token with the server in the background
    useEffect(() => {
        apiCheckSession().then(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    /**
     * Login — calls the Express API which validates against signup.csv
     * and appends a new row to login.csv.
     */
    const login = async (email, password) => {
        const result = await apiLogin(email, password);
        if (result.success) setCurrentUser(result.user);
        return result;
    };

    /**
     * Signup — calls the Express API which appends a row to signup.csv.
     */
    const signup = async (name, email, password) => {
        const result = await apiSignup(name, email, password);
        if (result.success) setCurrentUser(result.user);
        return result;
    };

    /**
     * Logout — removes the session from login.csv and clears localStorage.
     */
    const logout = async () => {
        await apiLogout();
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
    return ctx;
}
