const express = require('express');
const path = require('path');
const app = express();
const PORT = 3020;

// Task 21 Requirement: Import at least three custom modules
const logMessage = require('./lib/logger');
const calculateArea = require('./lib/mathUtils');
const getGreeting = require('./lib/timeHelper');

app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint to demonstrate modular output
app.get('/api/system-status', (req, res) => {
    // Task 21 Requirement: Use each module's exported function
    const greeting = getGreeting();
    const calculation = calculateArea(10); // Area of circle with radius 10
    const log = logMessage("System Core Synchronized");

    res.json({
        greeting,
        calculation: `Computed Circular Area (R=10): ${calculation} sqm`,
        log
    });
});

app.listen(PORT, () => {
    console.log(logMessage(`Modular Engine started at http://localhost:${PORT}`));
});
