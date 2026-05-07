const express = require('express');
const path = require('path');
const app = express();
const PORT = 5006;

app.use(express.static(path.join(__dirname, 'public')));

// Requirement: Use an in-memory store to track request counts
const rateLimitStore = {};
const LIMIT = 5; // 5 requests
const WINDOW_MS = 60 * 1000; // per minute (60,000 ms)

// Requirement: Create a middleware that limits the number of requests
const rateLimiter = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    if (!rateLimitStore[ip]) {
        // First request from this IP
        rateLimitStore[ip] = { count: 1, startTime: now };
        return next();
    }

    const userData = rateLimitStore[ip];

    // Check if the time window has expired
    if (now - userData.startTime > WINDOW_MS) {
        // Requirement: Reset them after the time window
        userData.count = 1;
        userData.startTime = now;
        console.log(`🔄 [RATE_LIMIT] Window reset for IP: ${ip}`);
        return next();
    }

    // Increment count if within window
    userData.count++;
    console.log(`📊 [TRAFFIC_MONITOR] IP: ${ip} | Count: ${userData.count}/${LIMIT}`);

    if (userData.count > LIMIT) {
        console.log(`🚫 [RATE_LIMIT_EXCEEDED] Denying access to IP: ${ip}`);
        return res.status(429).json({
            status: "RATE_LIMITED",
            message: "Too many requests! Limit is 5 per minute.",
            retryAfter: Math.ceil((WINDOW_MS - (now - userData.startTime)) / 1000) + "s"
        });
    }

    next();
};

// Apply rate limiter to the API endpoint
app.get('/api/secure-data', rateLimiter, (req, res) => {
    res.json({
        status: "SUCCESS",
        data: "This is premium intelligence behind a traffic governor.",
        remaining: LIMIT - rateLimitStore[req.ip || req.connection.remoteAddress].count
    });
});

app.listen(PORT, () => {
    console.log(`\n🚦 Task 37 Traffic Governor online at http://localhost:${PORT}`);
    console.log(`Policy: 5 Requests / 60 Seconds / IP\n`);
});
