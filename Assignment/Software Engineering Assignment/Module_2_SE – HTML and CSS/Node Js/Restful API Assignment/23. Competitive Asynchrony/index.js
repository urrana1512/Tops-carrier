const express = require('express');
const path = require('path');
const app = express();
const PORT = 4022;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 23: USING PROMISE.RACE() ---

// Requirement: Create two functions that return promises with different timeouts
function fetchData1() {
    return new Promise((resolve) => {
        console.log("🏎️ [RACE_INIT] Participant_1 entering the track (2000ms delay)...");
        setTimeout(() => resolve({ winner: "Participant_1", data: "Nexus High-Latency Packet" }), 2000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        console.log("🏎️ [RACE_INIT] Participant_2 entering the track (1000ms delay)...");
        setTimeout(() => resolve({ winner: "Participant_2", data: "Vector Low-Latency Packet" }), 1000);
    });
}

// Requirement: Use Promise.race() to get the result of the promise that resolves first
function executeCompetitiveHandshake(res) {
    console.log("\n🏁 [RACE_START] Initiating asynchronous competition...");
    
    Promise.race([fetchData1(), fetchData2()])
        .then((result) => {
            // Requirement: Log the result of the winning promise
            console.log("🏆 [RACE_COMPLETE] Winning Result:", result);
            
            if (res) res.json({
                status: "COMPETITION_CONCLUDED",
                outcome: result
            });
        })
        .catch((error) => {
            console.error("🚨 [RACE_FAULT]:", error);
            if (res) res.status(500).json({ status: "ERROR", message: error.message });
        });
}

app.get('/api/race', (req, res) => {
    executeCompetitiveHandshake(res);
});

app.listen(PORT, () => {
    console.log(`\n🏁 Task 23 Competitive Asynchrony active at http://localhost:${PORT}`);
    console.log(`Logic: Promise.race([fetch1, fetch2]).then(winner => ...)\n`);
});
