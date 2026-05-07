const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3027;

// FIX: Added JSON middleware to read the new name from the request
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const oldPath = path.join(__dirname, 'oldname.txt');

// Helper to find ANY .txt file in the directory to use as the source
const findCurrentFile = () => {
    const files = fs.readdirSync(__dirname);
    // Find the first .txt file that isn't a system file or index.js
    return files.find(f => f.endsWith('.txt') && f !== 'package.json');
};

// Task 22.7: Renaming a File (Dynamic)
app.post('/api/rename-file', (req, res) => {
    const { newName } = req.body;
    
    if (!newName) {
        return res.status(400).json({ success: false, message: 'Please provide a new filename.' });
    }

    // Determine current source file
    const currentFileName = findCurrentFile();
    if (!currentFileName) {
        return res.status(400).json({ success: false, message: 'No .txt file found to rename.' });
    }

    const currentPath = path.join(__dirname, currentFileName);
    const dynamicNewPath = path.join(__dirname, newName.endsWith('.txt') ? newName : `${newName}.txt`);

    // Prevent renaming to the same name
    if (currentFileName === (newName.endsWith('.txt') ? newName : `${newName}.txt`)) {
        return res.status(400).json({ success: false, message: 'New name must be different from current name.' });
    }

    fs.rename(currentPath, dynamicNewPath, (err) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        
        console.log(`\n🔄 [FS_RENAME] SUCCESS: '${currentFileName}' -> '${newName}'\n`);
        res.json({ success: true, message: `Renamed to ${newName}`, oldName: currentFileName });
    });
});

// Helper to Reset back to oldname.txt
app.post('/api/reset-rename', (req, res) => {
    const currentFileName = findCurrentFile();
    if (currentFileName && currentFileName !== 'oldname.txt') {
        fs.renameSync(path.join(__dirname, currentFileName), oldPath);
        console.log(`♻️ File identity reset: '${currentFileName}' -> 'oldname.txt'`);
    } else if (!currentFileName) {
        fs.writeFileSync(oldPath, "Reset file content.");
        console.log("🛠️ Re-created 'oldname.txt'");
    }
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`\n🏷️ Task 22.7 Identity Manager running at http://localhost:${PORT}`);
    console.log(`Ready to refactor file names...\n`);
});
