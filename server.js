import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// ── Database Connection ───────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in .env file");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas (TheIndieStore)'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));


// ── Mongoose Schemas & Models ─────────────────────────────────────────────────

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true } // In a real app, hash this!
}, { timestamps: true });

const sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    sessionToken: { type: String, required: true, unique: true },
    loginTime: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: () => new Date(+new Date() + 30 * 24 * 60 * 60 * 1000) } // 30 days
});

// TTL Index to automatically delete expired sessions
sessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const User = mongoose.model('User', userSchema);
const Session = mongoose.model('Session', sessionSchema);


// ── Routes ────────────────────────────────────────────────────────────────────

// POST /api/signup — register new user
app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields required.' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'An account with this email already exists.' });
        }

        // Create user
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Create session
        const sessionToken = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const newSession = new Session({
            name,
            email,
            sessionToken
        });
        await newSession.save();

        return res.json({ success: true, user: { name, email }, sessionToken });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: 'Internal server error during signup.' });
    }
});

// POST /api/login — validate credentials
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required.' });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password. Please try again.' });
        }

        // Create new session
        const sessionToken = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const newSession = new Session({
            name: user.name,
            email: user.email,
            sessionToken
        });
        await newSession.save();

        return res.json({ success: true, user: { name: user.name, email: user.email }, sessionToken });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ error: 'Internal server error during login.' });
    }
});

// GET /api/session — validate a session token
app.get('/api/session', async (req, res) => {
    try {
        const token = req.headers['x-session-token'];
        if (!token) return res.json({ user: null });

        const session = await Session.findOne({ sessionToken: token });
        if (!session) return res.json({ user: null });

        return res.json({
            user: { name: session.name, email: session.email }
        });
    } catch (error) {
        console.error("Session Validation Error:", error);
        return res.json({ user: null });
    }
});

// POST /api/logout — destroy session
app.post('/api/logout', async (req, res) => {
    try {
        const token = req.headers['x-session-token'];
        if (token) {
            await Session.deleteOne({ sessionToken: token });
        }
        res.json({ success: true });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ error: 'Failed to logout properly' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n==============================================`);
    console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
    console.log(`📦 Database: MongoDB Atlas (Connecting...)`);
    console.log(`==============================================\n`);
});
