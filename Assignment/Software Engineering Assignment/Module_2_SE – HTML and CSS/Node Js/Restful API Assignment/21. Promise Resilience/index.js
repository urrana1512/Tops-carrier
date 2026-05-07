const express = require('express');
const path = require('path');
const app = express();
const PORT = 4020;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 21: ERROR HANDLING IN PROMISES ---

// Requirement: Modify the fetchData function to randomly throw an error
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("📡 [RESILIENCE_SYNC] Initiating randomized fetch handshake...");
        
        setTimeout(() => {
            if (Math.random() < 0.5) {
                const data = { 
                    message: "Data fetched successfully!",
                    status: "SYNC_OK",
                    timestamp: new Date().toISOString()
                };
                resolve(data);
            } else {
                // Requirement: Reject the promise with an error
                reject(new Error("FAILED_TO_FETCH_DATA: Handshake interrupted by random fault."));
            }
        }, 2000);
    });
}

// Requirement: Create a function that calls fetchData and uses .catch() to handle errors
function executeResilienceTest(res) {
    fetchData()
        .then((result) => {
            console.log("✅ [RESILIENCE_SUCCESS]:", result);
            if (res) res.json(result);
        })
        .catch((error) => {
            // Requirement: Log the error message to the console
            console.error("🚨 [RESILIENCE_FAULT] Intercepted Error:", error.message);
            
            if (res) res.status(500).json({ 
                status: "FAIL", 
                error: error.message,
                timestamp: new Date().toISOString() 
            });
        });
}

// API Endpoint to trigger the Resilience logic
app.get('/api/resilience-test', (req, res) => {
    executeResilienceTest(res);
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 21 Promise Resilience active at http://localhost:${PORT}`);
    console.log(`Logic: fetchData() -> .then() -> .catch(logError)\n`);
});
