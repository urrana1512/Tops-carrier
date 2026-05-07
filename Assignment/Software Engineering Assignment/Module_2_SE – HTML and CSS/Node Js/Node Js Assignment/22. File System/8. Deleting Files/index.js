const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3028;

app.use(express.static(path.join(__dirname, 'public')));

const targetFile = path.join(__dirname, 'deleteMe.txt');

// Task 22.8: Deleting a File
app.post('/api/delete-file', (req, res) => {
    // Check if exists
    if (!fs.existsSync(targetFile)) {
        return res.status(400).json({ success: false, message: 'Object not found in storage.' });
    }

    // Requirement: Use fs.unlink method
    fs.unlink(targetFile, (err) => {
        if (err) {
            console.error("Deletion Error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        // Requirement: Log a success message once complete
        console.log(`\n🔥 [FS_DELETION] SUCCESS: 'deleteMe.txt' has been permanently removed.\n`);
        
        res.json({ success: true, message: 'Asset successfully decommissioned.' });
    });
});

// Helper to Restore the file
app.post('/api/restore-file', (req, res) => {
    fs.writeFileSync(targetFile, "Restored for testing Task 22.8");
    console.log("♻️ 'deleteMe.txt' restored to storage.");
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n🗑️ Task 22.8 Data Shredder running at http://localhost:${PORT}`);
    console.log(`Standing by to decommission deleteMe.txt...\n`);
});
