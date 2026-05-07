const express = require('express');
const path = require('path');
const app = express();
const PORT = 3007;

app.use(express.static(path.join(__dirname, 'public')));

// 1. Defined Healthy Route
app.get('/api/health', (req, res) => {
    res.json({ status: "OK", message: "System core is stable." });
});

// 2. Requirement: Simulate an error in one of your routes
app.get('/api/trigger-fault', (req, res) => {
    console.log("⚠️ [FAULT_INJECTION] Simulating a critical core failure...");
    // Throwing a deliberate error to test the sentinel
    throw new Error("Critical Core Failure: Simulated Sentinel Test.");
});

// 3. Requirement: Implement an error handling middleware function (4 arguments)
// Requirement: Ensure the middleware is used after all route handlers
app.use((err, req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    
    // Requirement: Log the error message (Internal)
    console.error(`🔥 [SENTINEL_CAPTURE] ${timestamp} | Error Captured: ${err.message}`);
    
    // Requirement: Respond with a JSON response with the error message
    res.status(500).json({
        status: "FAULT_INTERCEPTED",
        error: {
            name: err.name,
            message: err.message,
            timestamp: timestamp
        },
        instruction: "Contact the administrator. Error has been logged."
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 8 Failure Sentinel active at http://localhost:${PORT}`);
    console.log(`Endpoints: /api/health (Safe), /api/trigger-fault (To Test Error Handling)\n`);
});
