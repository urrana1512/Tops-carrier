const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

const dirPath = path.join(__dirname, 'myFiles');

// Task 22.10: Reading Files from a Directory
const scanDirectory = () => {
    // Requirement: Use fs.readdir method
    fs.readdir(dirPath, (err, files) => {
        if (err) return console.error("Scan Error:", err);

        console.log("\n--- [DIRECTORY SCAN: myFiles] ---");
        // Requirement: Log the names of all files to the console
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        console.log("----------------------------------\n");
    });
};

// Execute on startup
scanDirectory();

// API for UI
app.get('/api/list-files', (req, res) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ files });
    });
});

app.listen(PORT, () => {
    console.log(`\n🔍 Task 22.10 Directory Scanner running at http://localhost:${PORT}`);
    console.log(`Auditing myFiles namespace...\n`);
});
