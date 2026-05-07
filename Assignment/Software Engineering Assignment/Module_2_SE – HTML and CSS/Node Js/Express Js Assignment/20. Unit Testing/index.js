const express = require('express');
const app = express();
const PORT = 3019;

app.use(express.json());

// Task 20: Unit Testing Suite
// Sample API endpoints to demonstrate testing
app.get('/api/ping', (req, res) => {
    res.json({ status: "SUCCESS", message: "Pong" });
});

app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ status: "ERROR", message: "Message is mandatory." });
    }
    res.json({ status: "SUCCESS", echoed: message });
});

// For testing purposes, we export the app
module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\n🧪 Task 20 Test Sentinel online at http://localhost:${PORT}`);
        console.log(`Standing by for automated QA cycles.\n`);
    });
}
