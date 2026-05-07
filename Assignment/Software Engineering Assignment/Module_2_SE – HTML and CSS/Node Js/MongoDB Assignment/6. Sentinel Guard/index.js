const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const PORT = 5006;
const SECRET_KEY = "SENTINEL_ENCRYPTION_KEY";

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [SENTINEL_GUARD] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [SENTINEL_FAULT]:', err));

// User Model
const User = mongoose.model('SentinelUser', new mongoose.Schema({
    name: String,
    email: String
}));

// Seed Data
const seedUsers = async () => {
    if (await User.countDocuments() === 0) {
        await User.insertMany([
            { name: "John Sentinel", email: "john@guard.io" },
            { name: "Sarah Shield", email: "sarah@guard.io" }
        ]);
    }
};
seedUsers();

// --- TASK 6: PROTECTING ROUTES WITH MIDDLEWARE ---

// Requirement: Create a middleware function that checks for a valid JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        console.log("🛑 [SENTINEL_GUARD] Access Denied: Missing Bearer Token.");
        return res.status(401).json({ message: "Access Denied: No token provided." });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.log("🛑 [SENTINEL_GUARD] Access Denied: Invalid Signature.");
            return res.status(403).json({ message: "Access Denied: Invalid or expired token." });
        }
        req.user = user;
        console.log(`🛡️ [SENTINEL_GUARD] Authorized: ${user.email}`);
        next();
    });
};

// Route to generate a token for testing
app.post('/api/auth/token', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Requirement: Protect the /users route
app.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find();
        res.json({
            status: "SUCCESS",
            accessibleBy: req.user.email,
            data: users
        });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 6 Sentinel Guard active at http://localhost:${PORT}`);
    console.log(`Protected Resource: GET /users (Authorization Required)\n`);
});
