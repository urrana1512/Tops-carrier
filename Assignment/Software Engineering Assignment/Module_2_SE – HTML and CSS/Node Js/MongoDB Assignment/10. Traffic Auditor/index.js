const express = require('express');
const path = require('path');
const app = express();
const PORT = 5010;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 10: CUSTOM LOGGING MIDDLEWARE ---

// Requirement: Create custom middleware for logging request details
const nexusAuditor = (req, res, next) => {
    // Requirement: Capture Method, URL, and Timestamp
    const method = req.method;
    const url = req.originalUrl;
    const timestamp = new Date().toISOString();
    
    console.log(`📡 [TRAFFIC_AUDITOR] ${timestamp} | ${method} | ${url}`);
    
    // Optional: Log user agent for more detail
    const userAgent = req.get('User-Agent');
    
    // Store audit info in locals for potential UI display
    res.locals.audit = { method, url, timestamp, userAgent };
    
    next();
};

// Requirement: Apply it to your Express.js application
app.use(nexusAuditor);

// API Endpoints to test the auditor
app.get('/api/ping', (req, res) => {
    res.json({ status: "SUCCESS", message: "Nexus signal captured.", audit: res.locals.audit });
});

app.post('/api/data', (req, res) => {
    res.json({ status: "SUCCESS", message: "Packet ingested.", audit: res.locals.audit });
});

app.listen(PORT, () => {
    console.log(`\n📡 Task 10 Traffic Auditor active at http://localhost:${PORT}`);
    console.log(`Middleware: nexusAuditor { method, url, timestamp } applied globally.\n`);
});
