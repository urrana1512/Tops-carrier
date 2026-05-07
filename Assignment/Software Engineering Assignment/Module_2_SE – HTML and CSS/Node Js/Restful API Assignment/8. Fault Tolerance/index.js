const express = require('express');
const path = require('path');
const app = express();
const PORT = 4007;

app.use(express.static(path.join(__dirname, 'public')));

// Standard Route
app.get('/api/ping', (req, res) => {
    res.json({ status: "SUCCESS", message: "Operational." });
});

// Requirement: Simulate an error in one of your routes
app.get('/api/simulate-fault', (req, res, next) => {
    console.log("💥 [FAULT_SIMULATOR] Manually triggering an internal exception...");
    const error = new Error("Nexus Core Critical Failure: Simulation Engaged.");
    error.status = 500;
    
    // Pass the error to the next middleware (which will be our error handler)
    next(error);
});

// Trigger an unexpected code error
app.get('/api/crash-test', (req, res) => {
    console.log("🧨 [CRASH_TEST] Triggering a reference error...");
    // This variable does not exist, it will throw a ReferenceError
    res.send(nonExistentVariable);
});

// Requirement: Implement an error handling middleware that catches errors
// IMPORTANT: Error handling middleware MUST have 4 parameters: (err, req, res, next)
// Requirement: Ensure the middleware is the last one in your app
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Overload";

    console.error(`\n🚨 [FAULT_INTERCEPTOR] Error Captured:`);
    console.error(`   > STATUS: ${status}`);
    console.error(`   > MESSAGE: ${message}`);
    
    // Requirement: Respond with a JSON error message
    res.status(status).json({
        status: "FAIL",
        error: {
            code: status,
            message: message,
            timestamp: new Date().toISOString()
        }
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 8 Fault Tolerance active at http://localhost:${PORT}`);
    console.log(`Global Error Handshake active (Interception Protocol Enabled).\n`);
});
