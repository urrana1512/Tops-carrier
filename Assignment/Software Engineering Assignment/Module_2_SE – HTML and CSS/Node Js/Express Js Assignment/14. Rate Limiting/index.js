const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const app = express();
const PORT = 3013;

app.use(express.static(path.join(__dirname, 'public')));

// Task 14: Implementing Rate Limiting
// Requirement: Implement a middleware function that limits the number of requests from a single IP
const trafficGovernor = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute window for demonstration
    max: 10, // Requirement: Limit to 10 requests per window (for testing visibility)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: "DENIED",
        error: "Quota Exceeded",
        message: "You have surpassed the allowed request frequency (10 req/min). Access throttled."
    },
    handler: (req, res, next, options) => {
        console.warn(`🛑 [GOVERNOR_INTERCEPT] IP: ${req.ip} has breached the traffic quota.`);
        res.status(options.statusCode).send(options.message);
    }
});

// Requirement: Use the rate-limiting middleware
app.use('/api', trafficGovernor);

app.get('/api/ping', (req, res) => {
    console.log(`📡 [TRAFFIC_LOG] Valid request from IP: ${req.ip}`);
    res.json({
        status: "SUCCESS",
        message: "Signal processed by the Express engine.",
        remaining: req.rateLimit.remaining
    });
});

app.listen(PORT, () => {
    console.log(`\n🚦 Task 14 Traffic Governor active at http://localhost:${PORT}`);
    console.log(`Quota Profile: 10 requests / 1 minute (Applied to /api/*)\n`);
});
