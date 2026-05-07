const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 4023;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 24: ASYNCHRONOUS FILE OPERATIONS ---

// Requirement: Create a function that reads a file, processes content, and writes to new file
async function processNexusManifest(res) {
    console.log("📂 [FILE_ORCHESTRATION] Initiating asynchronous I/O sequence...");
    
    const inputPath = path.join(__dirname, 'input.txt');
    const outputPath = path.join(__dirname, 'output.txt');

    try {
        // Requirement: Use fs.promises API to read files
        const data = await fs.readFile(inputPath, 'utf8');
        console.log("📥 [FILE_ORCHESTRATION] Manifest read successful.");

        // Processing: Transform to uppercase
        const processedData = data.toUpperCase();

        // Requirement: Use fs.promises API to write files
        await fs.writeFile(outputPath, processedData);
        
        // Requirement: Log the success message
        console.log("📤 [FILE_ORCHESTRATION] Output manifest written successfully!");

        if (res) res.json({
            status: "SUCCESS",
            source: "input.txt",
            target: "output.txt",
            payload: processedData
        });
    } catch (error) {
        // Requirement: Log the error message
        console.error("🚨 [FILE_ORCHESTRATION] I/O Fault detected:", error.message);
        if (res) res.status(500).json({ status: "ERROR", message: error.message });
    }
}

app.get('/api/process-file', (req, res) => {
    processNexusManifest(res);
});

app.listen(PORT, () => {
    console.log(`\n📂 Task 24 File Orchestration active at http://localhost:${PORT}`);
    console.log(`Operations: Read (input.txt) -> Process (Upper) -> Write (output.txt)\n`);
});
