const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3032;

app.use(express.static(path.join(__dirname, 'public')));

const targetFile = path.join(__dirname, 'watch.txt');
let lastChange = null;

// Task 22.12: Watching for File Changes
// Requirement: Use the fs.watch method to monitor changes
fs.watch(targetFile, (eventType, filename) => {
    if (filename) {
        const timestamp = new Date().toLocaleTimeString();
        // Requirement: Log a message to the console whenever the file is modified
        console.log(`\n🔔 [FS_WATCH] EVENT DETECTED: '${filename}' was ${eventType} at ${timestamp}`);
        
        lastChange = {
            filename,
            eventType,
            timestamp
        };
    }
});

app.get('/api/watch-status', (req, res) => {
    res.json({ lastChange });
});

// Helper to simulate a change from the UI
app.post('/api/trigger-change', (req, res) => {
    const newData = `[UPDATE] File modified via system command at ${new Date().toLocaleString()}\n`;
    fs.appendFileSync(targetFile, newData);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n👁️ Task 22.12 Sentinel Watcher running at http://localhost:${PORT}`);
    console.log(`Now monitoring watch.txt for structural changes...\n`);
});
