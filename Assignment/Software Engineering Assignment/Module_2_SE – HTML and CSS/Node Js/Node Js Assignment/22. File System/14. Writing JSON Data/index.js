const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3034;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const outputPath = path.join(__dirname, 'output.json');

// Task 22.14: Writing JSON Data to a File
app.post('/api/write-json', (req, res) => {
    // 1. Requirement: Create a JavaScript object with sample data (e.g., user details)
    const userProfile = {
        id: "USR-7721",
        name: "Udit Rana",
        status: "Verified",
        technologies: ["Node.js", "Express", "MongoDB", "React"],
        metadata: {
            timestamp: new Date().toISOString(),
            session_id: Math.random().toString(36).substring(7)
        }
    };

    // 2. Requirement: Convert it to a JSON string using JSON.stringify
    const jsonString = JSON.stringify(userProfile, null, 2);

    // 3. Requirement: Use fs.writeFile to write the object to output.json
    fs.writeFile(outputPath, jsonString, (err) => {
        if (err) {
            console.error("Serialization Error:", err);
            return res.status(500).json({ success: false, error: err.message });
        }

        // 4. Requirement: Log a success message once the write operation is complete
        console.log(`\n💾 [FS_WRITE_JSON] SUCCESS: Schema finalized at 'output.json'`);
        console.log(`Payload Size: ${Buffer.byteLength(jsonString)} bytes\n`);

        res.json({ success: true, message: 'Profile serialized successfully.', data: userProfile });
    });
});

app.listen(PORT, () => {
    console.log(`\n💾 Task 22.14 Schema Architect running at http://localhost:${PORT}`);
    console.log(`Ready to serialize user profiles...\n`);
});
