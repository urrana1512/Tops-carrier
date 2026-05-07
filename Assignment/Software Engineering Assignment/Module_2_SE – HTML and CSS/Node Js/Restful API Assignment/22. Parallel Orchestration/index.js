const express = require('express');
const path = require('path');
const app = express();
const PORT = 4021;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 22: USING PROMISE.ALL() ---

// Requirement: Create multiple functions that return promises
function fetchData1() {
    return new Promise((resolve) => {
        console.log("📡 [PARALLEL_SYNC] Initiating Packet_1 (1000ms delay)...");
        setTimeout(() => resolve({ source: "Packet_1", payload: "Nexus Core Metadata" }), 1000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        console.log("📡 [PARALLEL_SYNC] Initiating Packet_2 (1500ms delay)...");
        setTimeout(() => resolve({ source: "Packet_2", payload: "Vector Guard Status" }), 1500);
    });
}

function fetchData3() {
    return new Promise((resolve) => {
        console.log("📡 [PARALLEL_SYNC] Initiating Packet_3 (500ms delay)...");
        setTimeout(() => resolve({ source: "Packet_3", payload: "Shield Matrix Signature" }), 500);
    });
}

// Requirement: Use Promise.all() to wait for all promises to resolve
function executeOrchestration(res) {
    console.log("\n🚀 [ORCHESTRATION_INIT] Launching parallel handshake...");
    
    const startTime = Date.now();

    Promise.all([fetchData1(), fetchData2(), fetchData3()])
        .then((results) => {
            const duration = Date.now() - startTime;
            // Requirement: Log the results of all resolved promises
            console.log("🏁 [ORCHESTRATION_COMPLETE] All packets ingested in", duration, "ms");
            console.log("📦 [ORCHESTRATION_RESULTS]:", results);
            
            if (res) res.json({
                status: "SUCCESS",
                duration_ms: duration,
                results: results
            });
        })
        .catch((error) => {
            console.error("🚨 [ORCHESTRATION_FAULT]:", error);
            if (res) res.status(500).json({ status: "FAIL", error: error.message });
        });
}

app.get('/api/parallel-sync', (req, res) => {
    executeOrchestration(res);
});

app.listen(PORT, () => {
    console.log(`\n🏎️ Task 22 Parallel Orchestration active at http://localhost:${PORT}`);
    console.log(`Logic: Promise.all([fetch1, fetch2, fetch3]).then(results => ...)\n`);
});
