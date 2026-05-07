const express = require('express');
const path = require('path');
const app = express();
const PORT = 4017;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 18: PROMISES ---

// Requirement: Modify the fetchData function to return a promise
function fetchData() {
    console.log("🔗 [PROMISE_INIT] Constructing asynchronous bridge...");
    
    return new Promise((resolve) => {
        // Requirement: Resolve the promise with the fetched data after the delay
        setTimeout(() => {
            const data = { 
                message: "Data fetched successfully via Promise!",
                pattern: "PROMISE_RESOLVE",
                timestamp: new Date().toISOString()
            };
            
            resolve(data);
        }, 2000);
    });
}

// Requirement: Create a function that calls fetchData and uses .then() to log the result
function executeRefactoredHandshake(res) {
    fetchData().then((result) => {
        // Requirement: Log the result to the console
        console.log("✅ [PROMISE_COMPLETE] Resource ingestion successful:", result);
        
        // If it's a web request, respond to the client
        if (res) res.json(result);
    });
}

// API Endpoint to trigger the Promise logic
app.get('/api/promise-handshake', (req, res) => {
    executeRefactoredHandshake(res);
});

app.listen(PORT, () => {
    console.log(`\n🔗 Task 18 Promise Bridge active at http://localhost:${PORT}`);
    console.log(`Core logic: function fetchData() { return new Promise(...) }\n`);
});
