const express = require('express');
const path = require('path');
const app = express();
const PORT = 5004;

// Requirement: Create a middleware function for logging requests
// This function captures the request details before passing control to the next handler
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    
    // Requirement: Log the request method and URL for every incoming request
    // Requirement: Log the request details to the console
    console.log(`📡 [TRAFFIC_SENTINEL] ${timestamp} | ${req.method} | ${req.originalUrl}`);
    
    // Pass control to the next middleware/route handler
    next();
};

// Requirement: Use the middleware in your server to track all requests
app.use(requestLogger);

app.use(express.static(path.join(__dirname, 'public')));

// Dummy API routes to test the logger
app.get('/api/v1/ping', (req, res) => {
    res.json({ status: "ALIVE", message: "Pulse detected." });
});

app.get('/api/v1/secure/data', (req, res) => {
    res.json({ status: "AUTHORIZED", data: "Confidential Node.js Intel." });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 33 Traffic Sentinel active at http://localhost:${PORT}`);
    console.log(`Telemetry is now active. All incoming requests are being logged.\n`);
});
