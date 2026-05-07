const express = require('express');
const path = require('path');
const app = express();
const PORT = 5005;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock User Database
const VALID_USER = {
    username: "admin",
    password: "password123",
    token: "NEXUS_ALPHA_SECRET" // Mock session token
};

// Requirement: Create a simple login route (/login) that accepts a username and password
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    console.log(`\n🔑 [LOGIN_ATTEMPT] User: ${username}`);

    // Requirement: Validate the credentials
    if (username === VALID_USER.username && password === VALID_USER.password) {
        console.log(`✅ [AUTH_SUCCESS] Access granted to ${username}.`);
        res.json({
            status: "SUCCESS",
            message: "Authentication successful.",
            token: VALID_USER.token
        });
    } else {
        console.log(`❌ [AUTH_FAILURE] Unauthorized access attempt detected.`);
        res.status(401).json({
            status: "UNAUTHORIZED",
            message: "Invalid credentials. Identity validation failed."
        });
    }
});

// Middleware to Protect Routes
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (token === VALID_USER.token) {
        next(); // Authorized
    } else {
        res.status(403).json({
            status: "FORBIDDEN",
            message: "Access Denied: Valid token required to enter the vault."
        });
    }
};

// Requirement: Protect a route (e.g., /api/protected)
app.get('/api/protected', authMiddleware, (req, res) => {
    console.log(`🔓 [VAULT_ENTRY] Protected data stream accessed.`);
    res.json({
        status: "SECURE",
        confidentialData: "The Node.js assignment series is nearly complete. Great work, Architect.",
        clearance: "Level Alpha"
    });
});

app.listen(PORT, () => {
    console.log(`\n🏰 Task 34 Vault active at http://localhost:${PORT}`);
    console.log(`Public Gate: /login | Protected Vault: /api/protected\n`);
});
