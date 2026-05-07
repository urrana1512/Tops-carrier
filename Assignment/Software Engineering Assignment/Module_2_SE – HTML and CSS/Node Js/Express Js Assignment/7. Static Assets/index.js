const express = require('express');
const path = require('path');
const app = express();
const PORT = 3006;

// Task 7: Serving Static Files
// Requirement: Use express.static to serve the static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for logging
app.get('/api/status', (req, res) => {
    res.json({ status: "ONLINE", message: "Static Nexus is distributing assets." });
});

app.listen(PORT, () => {
    console.log(`\n📦 Task 7 Asset Nexus online at http://localhost:${PORT}`);
    console.log(`Asset registry mapped to: ${path.join(__dirname, 'public')}`);
    console.log(`Access points: /index.html, /style.css, /script.js\n`);
});
