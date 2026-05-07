const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3022;

app.use(express.static(path.join(__dirname, 'public')));

// Task 22.2: Reading a File Asynchronously
const readSampleFile = () => {
    const filePath = path.join(__dirname, 'sample.txt');

    // Requirement: Use fs.readFile asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        
        // Requirement: Log the contents to the console
        console.log("\n--- [CONSOLE LOG: sample.txt] ---");
        console.log(data);
        console.log("---------------------------------\n");
    });
};

// Initial Call to Console
readSampleFile();

// API for the UI to get the same data
app.get('/api/read-sample', (req, res) => {
    fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ content: data });
    });
});

app.listen(PORT, () => {
    console.log(`\n📖 Task 22.2 Async Reader running at http://localhost:${PORT}`);
    console.log(`Check your console for the file contents!\n`);
});
