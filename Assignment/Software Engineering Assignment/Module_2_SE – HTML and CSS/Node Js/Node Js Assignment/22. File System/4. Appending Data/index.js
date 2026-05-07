const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3024;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const filePath = path.join(__dirname, 'append.txt');

// Task 22.4: Appending Data to a File
app.post('/api/append-data', (req, res) => {
    const { logEntry } = req.body;
    const formattedEntry = `\n[${new Date().toLocaleTimeString()}] ${logEntry || 'New Event Detected'}`;

    // Requirement: Use fs.appendFile to add new content
    fs.appendFile(filePath, formattedEntry, (err) => {
        if (err) return res.status(500).json({ success: false, error: err.message });

        // Requirement: Log the contents of the file after appending to confirm changes
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return res.status(500).json({ success: false, error: err.message });
            
            console.log("\n--- [SYSTEM LOG STREAM: append.txt] ---");
            console.log(data);
            console.log("---------------------------------------\n");
            
            res.json({ success: true, updatedContent: data });
        });
    });
});

app.listen(PORT, () => {
    console.log(`\n📝 Task 22.4 Log Streamer running at http://localhost:${PORT}`);
    console.log(`Ready to append to append.txt\n`);
});
