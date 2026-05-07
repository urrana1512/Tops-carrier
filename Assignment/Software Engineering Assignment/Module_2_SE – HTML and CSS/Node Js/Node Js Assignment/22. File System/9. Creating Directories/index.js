const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3029;

app.use(express.static(path.join(__dirname, 'public')));

const dirName = 'newDirectory';
const dirPath = path.join(__dirname, dirName);

// Task 22.9: Creating a Directory
app.post('/api/create-directory', (req, res) => {
    // Check if it already exists
    if (fs.existsSync(dirPath)) {
        return res.status(400).json({ success: false, message: 'Structure already exists in the registry.' });
    }

    // Requirement: Use the fs.mkdir method
    fs.mkdir(dirPath, (err) => {
        if (err) {
            console.error("Architectural Error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        // Requirement: Log a success message once the directory is created
        console.log(`\n🏗️ [FS_MKDIR] SUCCESS: Directory '${dirName}' has been successfully constructed.\n`);
        
        res.json({ success: true, message: 'New namespace successfully initialized.' });
    });
});

// Helper to Cleanup (Delete the directory)
app.post('/api/cleanup', (req, res) => {
    if (fs.existsSync(dirPath)) {
        fs.rmdirSync(dirPath);
        console.log("🧹 Cleanup complete: Directory removed.");
    }
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n🏗️ Task 22.9 Directory Architect running at http://localhost:${PORT}`);
    console.log(`Ready to construct newDirectory...\n`);
});
