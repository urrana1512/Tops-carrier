const express = require('express');
const path = require('path');
const app = express();
const PORT = 4001;

app.use(express.static(path.join(__dirname, 'public')));

// Task 2: Setting Up a Basic RESTful API
// Requirement: Implement a simple GET endpoint (/api) that returns a JSON response
app.get('/api', (req, res) => {
    console.log("🌐 [API_ENTRYPOINT] Handshake request received.");
    res.json({
        status: "SUCCESS",
        message: "Welcome to the API!",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Task 2 Basic API active at http://localhost:${PORT}`);
    console.log(`Endpoint available: GET /api\n`);
});
