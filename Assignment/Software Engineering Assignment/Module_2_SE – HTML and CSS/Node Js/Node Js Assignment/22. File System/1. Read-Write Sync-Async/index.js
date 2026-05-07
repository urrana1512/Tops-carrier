const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3021;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const inputFile = path.join(__dirname, 'input.txt');
const syncOutput = path.join(__dirname, 'output_sync.txt');
const asyncOutput = path.join(__dirname, 'output_async.txt');

// --- Task 22.1: Synchronous Method ---
app.post('/api/file/sync', (req, res) => {
    try {
        const startTime = Date.now();
        
        // 1. Read file synchronously
        const data = fs.readFileSync(inputFile, 'utf8');
        
        // 2. Write file synchronously
        fs.writeFileSync(syncOutput, `[SYNC_COPY] ${data}\nCopied at: ${new Date()}`);
        
        const duration = Date.now() - startTime;
        res.json({ success: true, method: 'Synchronous', duration: `${duration}ms`, message: 'File cloned via Blocking I/O' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// --- Task 22.1: Asynchronous Method ---
app.post('/api/file/async', (req, res) => {
    const startTime = Date.now();

    // 1. Read file asynchronously
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ success: false, error: err.message });

        // 2. Write file asynchronously
        fs.writeFile(asyncOutput, `[ASYNC_COPY] ${data}\nCopied at: ${new Date()}`, (err) => {
            if (err) return res.status(500).json({ success: false, error: err.message });

            const duration = Date.now() - startTime;
            res.json({ success: true, method: 'Asynchronous', duration: `${duration}ms`, message: 'File cloned via Non-Blocking Event Loop' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Task 22.1 File Bridge running at http://localhost:${PORT}\n`);
});
