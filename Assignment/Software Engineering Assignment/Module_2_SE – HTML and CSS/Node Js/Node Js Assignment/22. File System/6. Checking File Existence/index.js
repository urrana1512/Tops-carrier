const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3026;

app.use(express.static(path.join(__dirname, 'public')));

const targetFile = path.join(__dirname, 'check.txt');

// Task 22.6: Checking if a File Exists
app.get('/api/check-file', (req, res) => {
    // Requirement: Use fs.existsSync to check for the existence
    const exists = fs.existsSync(targetFile);
    
    // Requirement: Log a message indicating existence
    if (exists) {
        console.log(`\n🔍 [PROBE] TARGET FOUND: ${targetFile}`);
    } else {
        console.log(`\n⚠️ [PROBE] TARGET NOT FOUND: ${targetFile}`);
    }

    res.json({ exists, fileName: 'check.txt' });
});

// Helper to Create the file for testing
app.post('/api/create-test-file', (req, res) => {
    fs.writeFileSync(targetFile, "System Check File - Task 22.6");
    console.log("🛠️ Created check.txt for testing.");
    res.json({ success: true });
});

// Helper to Delete the file for testing
app.post('/api/delete-test-file', (req, res) => {
    if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
        console.log("🗑️ Deleted check.txt for testing.");
    }
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n🛰️ Task 22.6 File Prober running at http://localhost:${PORT}`);
    console.log(`Monitoring for check.txt...\n`);
});
