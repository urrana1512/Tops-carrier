const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3018;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Task 19: Handling Cookies and Sessions
// Requirement: Use express-session to manage user sessions
app.use(session({
    secret: 'nexus_session_vault_2026',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 30 } // 30 minutes
}));

// Requirement: Create a login route that sets a session upon successful login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // Simple validation for demonstration
    if (username === 'admin' && password === 'nexus123') {
        req.session.isAuthorized = true;
        req.session.username = username;
        
        console.log(`\n🔑 [SESSION_ORCHESTRATOR] Session initialized for: ${username}`);
        res.json({ status: "SUCCESS", message: "Login successful. Session established." });
    } else {
        res.status(401).json({ status: "ERROR", message: "Invalid credentials." });
    }
});

// Requirement: Protect a route that requires the user to be logged in
app.get('/api/dashboard', (req, res) => {
    if (req.session.isAuthorized) {
        console.log(`✅ [SESSION_ORCHESTRATOR] Verified access for: ${req.session.username}`);
        res.json({
            status: "GRANTED",
            message: "Welcome to the Protected Nexus Dashboard.",
            user: req.session.username
        });
    } else {
        console.warn(`🛑 [SESSION_ORCHESTRATOR] Unauthorized access attempt blocked.`);
        res.status(403).json({ status: "DENIED", message: "Unauthorized. Please log in." });
    }
});

app.post('/api/logout', (req, res) => {
    const user = req.session.username;
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ status: "ERROR", message: "Logout failed." });
        console.log(`🚪 [SESSION_ORCHESTRATOR] Session terminated for: ${user}`);
        res.json({ status: "SUCCESS", message: "Session destroyed. Logged out." });
    });
});

app.listen(PORT, () => {
    console.log(`\n🎟️ Task 19 Session Vault online at http://localhost:${PORT}`);
    console.log(`Session-backed identity management active.\n`);
});
