const express = require('express');
const path = require('path');
const app = express();
const PORT = 5009;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 9: ASYNCHRONOUS ERROR HANDLING ---

// The "Chaos Service": Simulates a non-deterministic async operation
function performAsynchronousHandshake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve({ status: "SUCCESS", message: "Data packet ingested." });
            } else {
                reject(new Error("NETWORK_ASYNC_FAULT: Signal lost in transit."));
            }
        }, 1500);
    });
}

// 1. Requirement: Use try/catch blocks for async/await operations
async function tryCatchHandler(res) {
    console.log("🌀 [ASYNC_RESILIENCE] Initiating Procedural (Try/Catch) probe...");
    try {
        const data = await performAsynchronousHandshake();
        console.log("✅ [ASYNC_RESILIENCE] Try/Catch Success.");
        res.json(data);
    } catch (error) {
        console.error("🚨 [ASYNC_RESILIENCE] Try/Catch Gracefully Handled:", error.message);
        res.status(500).json({ status: "CAUGHT_BY_TRY_CATCH", message: error.message });
    }
}

// 2. Requirement: Use promise.catch to manage errors
function promiseCatchHandler(res) {
    console.log("🌀 [ASYNC_RESILIENCE] Initiating Prototype (.catch) probe...");
    performAsynchronousHandshake()
        .then((data) => {
            console.log("✅ [ASYNC_RESILIENCE] .catch Logic Success.");
            res.json(data);
        })
        .catch((error) => {
            console.error("🚨 [ASYNC_RESILIENCE] .catch Logic Gracefully Handled:", error.message);
            res.status(500).json({ status: "CAUGHT_BY_PROMISE_CATCH", message: error.message });
        });
}

app.get('/api/test-try-catch', (req, res) => tryCatchHandler(res));
app.get('/api/test-promise-catch', (req, res) => promiseCatchHandler(res));

app.listen(PORT, () => {
    console.log(`\n🌀 Task 9 Async Resilience active at http://localhost:${PORT}`);
    console.log(`Patterns: try { await ... } catch and .then().catch()\n`);
});
