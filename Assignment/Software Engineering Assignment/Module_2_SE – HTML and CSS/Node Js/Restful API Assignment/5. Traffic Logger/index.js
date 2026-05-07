const express = require('express');
const path = require('path');
const app = express();
const PORT = 4004;

app.use(express.static(path.join(__dirname, 'public')));

// Task 5: Implementing Middleware for Logging
// Requirement: Implement a logging middleware that logs request method, URL, and timestamp
const trafficLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    
    // Requirement: Use console.log to output the log information to the terminal
    console.log(`\n📡 [INGRESS_AUDIT] ${timestamp}`);
    console.log(`   > METHOD: ${method}`);
    console.log(`   > TARGET: ${url}`);
    
    // Ensure the middleware does not block the request
    next();
};

// Requirement: Apply this middleware to all incoming requests
app.use(trafficLogger);

app.get('/api/ping', (req, res) => {
    res.json({ status: "SUCCESS", message: "Signal captured by the Nexus core." });
});

app.get('/api/resource', (req, res) => {
    res.json({ status: "SUCCESS", data: "Standard Operational Resource" });
});

app.listen(PORT, () => {
    console.log(`\n🛰️ Task 5 Traffic Logger active at http://localhost:${PORT}`);
    console.log(`Global Ingress Sentinel is auditing all incoming packets.\n`);
});
