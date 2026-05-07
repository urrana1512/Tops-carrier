const express = require('express');
const path = require('path');
const app = express();
const PORT = 4018;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 19: CHAINING PROMISES ---

// Stage 1: Fetch Data
function fetchData() {
    console.log("📡 [STAGE_1] Constructing fetch bridge...");
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { message: "Nexus system operational" };
            console.log("✅ [STAGE_1] Raw data ingested.");
            resolve(data);
        }, 1500);
    });
}

// Requirement: Create a function processData that takes data and returns a promise
// Stage 2: Process Data
function processData(data) {
    console.log("⚙️ [STAGE_2] Constructing processing bridge...");
    return new Promise((resolve) => {
        setTimeout(() => {
            // Requirement: Demonstrate how to work with multiple async operations
            const processed = { 
                message: data.message.toUpperCase(),
                transformation: "UPPERCASE_TRANSFORM",
                timestamp: new Date().toISOString()
            };
            console.log("✅ [STAGE_2] Data transformation complete.");
            resolve(processed);
        }, 1000);
    });
}

// Requirement: Chain two calls to fetchData and processData
function executePipeline(res) {
    console.log("\n🚀 [PIPELINE_INIT] Launching asynchronous sequence...");
    
    fetchData()
        .then((result) => processData(result))
        .then((processedResult) => {
            // Requirement: Log the final result after both operations
            console.log("🏁 [PIPELINE_FINAL] Sequence concluded:", processedResult);
            
            if (res) res.json(processedResult);
        });
}

app.get('/api/pipeline', (req, res) => {
    executePipeline(res);
});

app.listen(PORT, () => {
    console.log(`\n⛓️ Task 19 Promise Sequence active at http://localhost:${PORT}`);
    console.log(`Architecture: fetchData() -> .then(processData) -> .then(finalLog)\n`);
});
