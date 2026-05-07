const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'public')));

// 1. Defined Route
app.get('/api/health', (req, res) => {
    res.json({ status: "Operational", message: "Sentinel system is online." });
});

// 2. Route that triggers a simulated Server Error (500)
app.get('/api/trigger-error', (req, res) => {
    console.log("⚠️ [SIMULATION] Triggering a critical system fault...");
    throw new Error("Critical Core Failure: Simulated Exception.");
});

// 3. Requirement: Add a middleware function to handle 404 errors for undefined routes
app.use((req, res, next) => {
    const errorMsg = `🚫 [404_EVENT] Route not found: ${req.originalUrl}`;
    console.log(errorMsg);
    
    // Requirement: Respond with a 404 status code and a friendly message
    res.status(404).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1 style="color: #ef4444;">Page not found!</h1>
            <p style="color: #64748b;">The requested path ${req.originalUrl} does not exist in our registry.</p>
            <a href="/">Return to Dashboard</a>
        </div>
    `);
});

// 4. Requirement: Handle any potential server errors with appropriate responses
app.use((err, req, res, next) => {
    console.error(`🔥 [SERVER_ERROR] ${err.stack}`);
    
    res.status(500).json({
        status: "FAULT",
        message: "A potential server error occurred. Our engineers have been notified.",
        error_type: err.name
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 30 Resilience Sentinel active at http://localhost:${PORT}`);
    console.log(`Endpoints: /api/health, /api/trigger-error (to test 500), or any random path (to test 404)\n`);
});
