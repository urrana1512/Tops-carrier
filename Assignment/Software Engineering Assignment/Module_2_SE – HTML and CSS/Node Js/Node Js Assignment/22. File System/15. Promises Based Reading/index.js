const express = require('express');
const fs = require('fs').promises; // Requirement: Use fs.promises
const path = require('path');
const app = express();
const PORT = 3035;

app.use(express.static(path.join(__dirname, 'public')));

const targetFile = path.join(__dirname, 'promiseFile.txt');

// Task 22.15: Reading a File Asynchronously with Promises
app.get('/api/read-promise', (req, res) => {
    // Requirement: Use fs.promises.readFile method
    fs.readFile(targetFile, 'utf8')
        .then(data => {
            // Requirement: Log the contents to the console
            console.log("\n📜 [PROMISE_RESOLVE] SUCCESS: Data ingested from registry.");
            console.log("--------------------------------------------------");
            console.log(data);
            console.log("--------------------------------------------------\n");

            res.json({ success: true, content: data });
        })
        .catch(err => {
            // Requirement: Handle potential errors using .catch()
            console.error("\n❌ [PROMISE_REJECT] ERROR: Failed to access asset.");
            console.error(err.message);
            console.log("--------------------------------------------------\n");

            res.status(500).json({ success: false, error: err.message });
        });
});

app.listen(PORT, () => {
    console.log(`\n💎 Task 22.15 Promise Ingestor running at http://localhost:${PORT}`);
    console.log(`Standing by to resolve promiseFile.txt...\n`);
});
