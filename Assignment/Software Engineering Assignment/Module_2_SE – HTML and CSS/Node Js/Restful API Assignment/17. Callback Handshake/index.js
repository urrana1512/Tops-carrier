const express = require('express');
const path = require('path');
const app = express();
const PORT = 4016;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 17: UNDERSTANDING CALLBACKS ---

// Requirement: Write a function fetchData that simulates fetching data with a delay
function fetchData(callback) {
    console.log("📡 [FETCH_INIT] Initiating asynchronous handshake...");
    
    // Requirement: Use setTimeout for delay
    setTimeout(() => {
        const data = { 
            message: "Data fetched successfully!",
            timestamp: new Date().toISOString(),
            status: "SYNCHRONIZED"
        };
        
        // Requirement: Use a callback to return the fetched data
        callback(data);
    }, 2000);
}

// Requirement: Create another function that calls fetchData and logs the result
function executeHandshake(res) {
    fetchData((result) => {
        // Requirement: Log the result to the console
        console.log("✅ [FETCH_COMPLETE] Handshake successful:", result);
        
        // If it's a web request, respond to the client
        if (res) res.json(result);
    });
}

// API Endpoint to trigger the callback logic
app.get('/api/handshake', (req, res) => {
    executeHandshake(res);
});

app.listen(PORT, () => {
    console.log(`\n🤝 Task 17 Callback Handshake active at http://localhost:${PORT}`);
    console.log(`Core logic: function fetchData(callback) { ... }\n`);
});
