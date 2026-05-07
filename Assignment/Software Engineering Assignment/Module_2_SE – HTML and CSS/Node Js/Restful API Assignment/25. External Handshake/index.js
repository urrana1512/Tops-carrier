const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 4024;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 25: ASYNCHRONOUS HTTP REQUESTS ---

// Requirement: Create an async function that fetches data from a public API
async function fetchNexusPosts(res) {
    console.log("📡 [EXTERNAL_HANDSHAKE] Initiating request to JSONPlaceholder...");
    
    try {
        // Requirement: Use axios.get() with async/await
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        // Requirement: Log the fetched data to the console
        console.log("✅ [EXTERNAL_HANDSHAKE] Success: Ingested", response.data.length, "resources.");
        console.log("📦 [EXTERNAL_DATA_PREVIEW]:", response.data[0]);

        if (res) res.json({
            status: "SUCCESS",
            provider: "JSONPlaceholder",
            count: response.data.length,
            data: response.data
        });
    } catch (error) {
        // Requirement: Handle any errors that may occur
        console.error("🚨 [EXTERNAL_FAULT] Intercepted Error:", error.message);
        if (res) res.status(500).json({ status: "ERROR", message: error.message });
    }
}

app.get('/api/fetch-external', (req, res) => {
    fetchNexusPosts(res);
});

app.listen(PORT, () => {
    console.log(`\n🌐 Task 25 External Handshake active at http://localhost:${PORT}`);
    console.log(`Protocol: axios.get('https://jsonplaceholder.typicode.com/posts')\n`);
});
