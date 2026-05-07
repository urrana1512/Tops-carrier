const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;

// Requirement: Create a middleware function that logs the request method and URL
const ingressSentinel = (req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`📡 [INGRESS_LOG] ${timestamp} | ${method} ➔ ${url}`);

    // Requirement: Ensure the middleware does not block the request
    next();
};

// Requirement: Use this middleware in your Express app to log all incoming requests
app.use(ingressSentinel);

app.use(express.static(path.join(__dirname, 'public')));

// Sample API Routes to trigger logging
app.get('/api/ping', (req, res) => {
    res.json({ status: "ALIVE", message: "Signal received." });
});

app.get('/api/data/secure', (req, res) => {
    res.json({ status: "SUCCESS", payload: "Encrypted Node.js Intel." });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 4 Ingress Sentinel active at http://localhost:${PORT}`);
    console.log(`Telemetry layer is operational. All traffic is being monitored.\n`);
});
