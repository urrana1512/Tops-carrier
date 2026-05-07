const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Task 11: Implementing Basic Authentication
// Requirement: Set up a login route that accepts username and password
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Requirement: Validate the credentials (hardcoded for simplicity)
    const VALID_USER = "admin";
    const VALID_PASS = "nexus_pass_2026";

    console.log(`\n🔑 [AUTH_ATTEMPT] Target: ${username}`);

    if (username === VALID_USER && password === VALID_PASS) {
        console.log("✅ [AUTH_GRANTED] Access protocol approved.");
        // Requirement: Respond with a success message
        res.json({
            status: "SUCCESS",
            message: "Authentication approved. Vault access granted.",
            token: "NEXUS_SESSION_B64_XYZ"
        });
    } else {
        console.warn("⚠️ [AUTH_DENIED] Invalid credentials provided.");
        // Requirement: Respond with a failure message
        res.status(401).json({
            status: "FAILURE",
            message: "Unauthorized. Credential mismatch detected."
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n🔐 Task 11 Vault Access active at http://localhost:${PORT}`);
    console.log(`Awaiting authentication handshake at /login\n`);
});
