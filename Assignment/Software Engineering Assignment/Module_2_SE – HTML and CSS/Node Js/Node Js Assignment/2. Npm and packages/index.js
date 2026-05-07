const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; // Using a different port to avoid conflict

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Route to demonstrate package usage
app.get('/api/package-info', (req, res) => {
    res.json({
        packages: [
            {
                name: "Express",
                type: "Dependency",
                useCase: "Used to handle the server, routing, and middleware logic you see here.",
                status: "Active"
            },
            {
                name: "Nodemon",
                type: "Dev-Dependency",
                useCase: "Monitors file changes and automatically restarts the server during development.",
                status: "Watching..."
            }
        ],
        environment: {
            nodeVersion: process.version,
            platform: process.platform,
            uptime: Math.floor(process.uptime()) + "s"
        }
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Task 2 Server started!`);
    console.log(`📡 Local: http://localhost:${PORT}`);
    console.log(`⚡ Powered by Express & Nodemon\n`);
});
