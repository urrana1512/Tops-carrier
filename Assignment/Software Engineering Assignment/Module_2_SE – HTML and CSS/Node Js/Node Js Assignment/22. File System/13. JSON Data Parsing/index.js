const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3033;

app.use(express.static(path.join(__dirname, 'public')));

const targetFile = path.join(__dirname, 'data.json');

// Task 22.13: Reading and Parsing a JSON File
app.get('/api/read-json', (req, res) => {
    // Requirement: Use fs.readFile to read the file
    fs.readFile(targetFile, 'utf8', (err, data) => {
        if (err) {
            console.error("Ingestion Error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        try {
            // Requirement: Parse its contents using JSON.parse
            const parsedData = JSON.parse(data);
            
            // Requirement: Log the parsed object to the console
            console.log("\n--- [STRUCTURED DATA INGESTED: data.json] ---");
            console.log(parsedData);
            console.log("--------------------------------------------\n");

            res.json({ success: true, data: parsedData });
        } catch (parseErr) {
            console.error("Parsing Error:", parseErr);
            res.status(500).json({ success: false, error: "Syntax error in JSON registry." });
        }
    });
});

app.listen(PORT, () => {
    console.log(`\n📦 Task 22.13 Data Ingestor running at http://localhost:${PORT}`);
    console.log(`Standing by to parse data.json...\n`);
});
