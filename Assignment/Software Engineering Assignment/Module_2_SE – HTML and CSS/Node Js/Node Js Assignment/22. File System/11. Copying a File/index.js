const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3031;

app.use(express.static(path.join(__dirname, 'public')));

const srcPath = path.join(__dirname, 'original.txt');
const destPath = path.join(__dirname, 'copy.txt');

// Task 22.11: Copying a File
app.post('/api/copy-file', (req, res) => {
    // Requirement: Use fs.copyFile method
    fs.copyFile(srcPath, destPath, (err) => {
        if (err) {
            console.error("Replication Error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        // Requirement: Log a success message once complete
        console.log(`\n👯 [FS_COPY] SUCCESS: 'original.txt' has been replicated to 'copy.txt'\n`);
        
        res.json({ success: true, message: 'Asset replicated successfully.' });
    });
});

// Helper to check if copy exists
app.get('/api/check-copy', (req, res) => {
    const exists = fs.existsSync(destPath);
    res.json({ exists });
});

// Helper to cleanup for reset
app.post('/api/cleanup', (req, res) => {
    if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
        console.log("🧹 Cloned asset removed from registry.");
    }
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n👯 Task 22.11 Data Replicator running at http://localhost:${PORT}`);
    console.log(`Standing by to clone original.txt...\n`);
});
