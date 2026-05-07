const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const app = express();
const PORT = 4013;

app.use(express.static(path.join(__dirname, 'public')));

// Task 14: Implementing Rate Limiting
// Requirement: Use the express-rate-limit package to limit requests
const nexusLimiter = rateLimit({
    windowMs: 15 * 1000, // 15 seconds window
    max: 5, // Limit each IP to 5 requests per window
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: "THROTTLED",
        message: "Traffic Governor: Request threshold exceeded. Please wait 15 seconds."
    }
});

// Requirement: Configure the rate limiter for specific routes
app.get('/api/protected-resource', nexusLimiter, (req, res) => {
    console.log("🚦 [TRAFFIC_GOVERNOR] Request authorized: Velocity within safety limits.");
    res.json({
        status: "SUCCESS",
        message: "Access granted to the Nexus Resource Vault."
    });
});

// Unprotected route for comparison
app.get('/api/public-info', (req, res) => {
    res.json({
        status: "SUCCESS",
        message: "This is a public broadcast (Unlimited Access)."
    });
});

app.listen(PORT, () => {
    console.log(`\n🚦 Task 14 Traffic Governor active at http://localhost:${PORT}`);
    console.log(`Governor Threshold: 5 requests / 15 seconds (/api/protected-resource)\n`);
});
