const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const PORT = 4008;

const SECRET_KEY = 'nexus_shield_alpha_2026';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock User Database
const users = [];

// Task 9: Adding Authentication (JWT)
// Requirement: Set up user registration route
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Username and password required." });

    users.push({ username, password });
    console.log(`👤 [IDENTITY_SHIELD] New identity registered: ${username}`);
    res.status(201).json({ status: "SUCCESS", message: "User registered successfully." });
});

// Requirement: Set up login route to issue tokens
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate Token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        console.log(`🔑 [IDENTITY_SHIELD] Handshake successful. Token issued for: ${username}`);
        res.json({ status: "SUCCESS", token });
    } else {
        res.status(401).json({ status: "ERROR", message: "Invalid credentials." });
    }
});

// Requirement: Use middleware to verify the JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) return res.status(401).json({ status: "DENIED", message: "Missing authorization token." });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ status: "DENIED", message: "Token invalid or expired." });
        req.user = user;
        next();
    });
};

// Requirement: Protect certain routes by requiring a valid token
app.get('/api/protected', authenticateToken, (req, res) => {
    console.log(`✅ [IDENTITY_SHIELD] Authorized access granted to: ${req.user.username}`);
    res.json({
        status: "AUTHORIZED",
        message: "Welcome to the Secured Nexus Sector.",
        user: req.user.username,
        secret_data: "This data is only visible to verified entities."
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 9 Identity Shield active at http://localhost:${PORT}`);
    console.log(`Security Protocol: JWT (Stateless Tokenization)\n`);
});
