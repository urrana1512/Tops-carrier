const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3023;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Task 22.3: Writing to a File
app.post('/api/write-file', (req, res) => {
    const { content } = req.body;
    const filePath = path.join(__dirname, 'output.txt');

    // Requirement: Use fs.writeFile to write data
    fs.writeFile(filePath, content || 'Default sample data for Task 22.3', (err) => {
        if (err) {
            console.error("Write error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        // Requirement: Log a success message to the console
        console.log(`\n✅ [FS_SUCCESS] Data successfully committed to: ${filePath}\n`);
        
        res.json({ success: true, message: 'Data persisted successfully to output.txt' });
    });
});

app.listen(PORT, () => {
    console.log(`\n💾 Task 22.3 Data Architect running at http://localhost:${PORT}`);
    console.log(`Ready to write to output.txt\n`);
});
