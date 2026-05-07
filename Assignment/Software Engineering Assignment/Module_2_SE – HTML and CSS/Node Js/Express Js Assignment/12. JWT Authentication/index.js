const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const PORT = 3011;

const SECRET_KEY = "nexus_core_secret_2026"; // In production, this should be in an environment variable

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 1. JWT Verification Middleware
// Requirement: Use middleware to verify the JWT on the protected route
const authSentinel = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Expecting "Bearer <token>"

    if (!token) {
        console.warn("⚠️ [AUTH_SENTINEL] Missing identity token. Access denied.");
        return res.status(401).json({ status: "DENIED", message: "Missing JWT Token." });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.error("🔥 [AUTH_SENTINEL] Invalid or expired token detected.");
            return res.status(403).json({ status: "DENIED", message: "Invalid JWT Token." });
        }
        req.user = user;
        console.log(`✅ [AUTH_SENTINEL] Token verified. Identity: ${user.username}`);
        next();
    });
};

// 2. Registration Route (Generates JWT)
// Requirement: Create a registration route that generates a JWT for new users
app.post('/api/register', (req, res) => {
    const { username } = req.body;
    
    if (!username) return res.status(400).json({ status: "ERROR", message: "Username required." });

    // Generate Token
    const token = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: '1h' });

    console.log(`\n🎫 [TOKEN_ISSUED] Identity: ${username} | Token dispatched.`);
    res.json({
        status: "SUCCESS",
        message: "Identity registered. Token issued.",
        token: token
    });
});

// 3. Protected Route
// Requirement: Protect a route (e.g., /api/protected) that requires a valid JWT to access
app.get('/api/protected', authSentinel, (req, res) => {
    res.json({
        status: "GRANTED",
        message: "Welcome to the Secure Nexus Core.",
        authorized_user: req.user.username,
        intel: "The backend is now fully operational and secured with JWT protocols."
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 12 Token Sentinel active at http://localhost:${PORT}`);
    console.log(`Registration: /api/register (POST) | Protected: /api/protected (GET)\n`);
});
