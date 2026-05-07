const express = require('express');
const path = require('path');
const app = express();
const PORT = 4019;

app.use(express.static(path.join(__dirname, 'public')));

// Stage 1: Promise-based fetch
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Nexus signal captured" };
            resolve(data);
        }, 1500);
    });
}

// Stage 2: Promise-based process
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                message: data.message.toUpperCase(),
                pattern: "ASYNC_AWAIT_SYNTAX",
                timestamp: new Date().toISOString()
            });
        }, 1000);
    });
}

// --- TASK 20: ASYNC/AWAIT ---

// Requirement: Create an async function that fetches data and processes it using await
async function fetchAndProcessData(res) {
    console.log("\n⚡ [MODERN_ASYNC] Initiating procedural handshake...");
    
    // Requirement: Use try/catch to handle any errors
    try {
        const result = await fetchData();
        console.log("📥 [MODERN_ASYNC] Stage 1 Resolve: Data ingested.");

        const processedResult = await processData(result);
        console.log("⚙️ [MODERN_ASYNC] Stage 2 Resolve: Transformation complete.");

        // Requirement: Log the final result
        console.log("✅ [MODERN_ASYNC] Final Outcome:", processedResult);

        if (res) res.json(processedResult);
    } catch (error) {
        console.error("🚨 [MODERN_ASYNC] Fault detected:", error);
        if (res) res.status(500).json({ status: "ERROR", message: error.message });
    }
}

app.get('/api/async-handshake', (req, res) => {
    fetchAndProcessData(res);
});

app.listen(PORT, () => {
    console.log(`\n⚡ Task 20 Modern Asynchrony active at http://localhost:${PORT}`);
    console.log(`Architecture: async function { await fetchData(); await processData(); }\n`);
});
