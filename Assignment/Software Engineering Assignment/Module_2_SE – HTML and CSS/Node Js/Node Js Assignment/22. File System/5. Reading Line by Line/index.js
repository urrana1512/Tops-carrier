const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3025;

app.use(express.static(path.join(__dirname, 'public')));

// Task 22.5: Reading a File Line by Line
const processFileLineByLine = () => {
    const filePath = path.join(__dirname, 'data.txt');

    // Requirement: Use fs.readFile to read contents
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error("Scanner Error:", err);

        // Requirement: Split contents into an array of lines
        const lines = data.split('\n');

        console.log("\n--- [CONSOLE: SEQUENTIAL LINE SCAN] ---");
        
        // Requirement: Use a loop to iterate through the lines
        lines.forEach((line, index) => {
            if(line.trim()) {
                // Requirement: Print them one by one
                console.log(`[Line ${index + 1}] > ${line}`);
            }
        });

        console.log("---------------------------------------\n");
    });
};

// Execute on startup
processFileLineByLine();

// API for the UI to get lines
app.get('/api/scan-lines', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        const lines = data.split('\n').filter(l => l.trim() !== "");
        res.json({ lines });
    });
});

app.listen(PORT, () => {
    console.log(`\n🔍 Task 22.5 Line Scanner running at http://localhost:${PORT}`);
    console.log(`Check terminal for the sequential line log!\n`);
});
