const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 4025;

app.use(express.static(path.join(__dirname, 'public')));

// --- TASK 26: COMBINING ASYNC/AWAIT WITH EXPRESS ---

// Requirement: Create a route that fetches data from an external API using async/await
app.get('/api/async-data', async (req, res) => {
    console.log("⚡ [ASYNC_ORCHESTRATOR] Ingress captured: Initiating external request...");
    
    // Requirement: Use async/await in the route handler
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        console.log("✅ [ASYNC_ORCHESTRATOR] External data ingested successfully.");
        
        // Requirement: Return the fetched data as a JSON response
        res.json({
            status: "SUCCESS",
            source: "JSONPlaceholder",
            count: response.data.length,
            users: response.data
        });
    } catch (error) {
        console.error("🚨 [ASYNC_ORCHESTRATOR] Handshake Fault:", error.message);
        res.status(500).json({ status: "ERROR", message: "Failed to fetch data from cloud provider." });
    }
});

app.listen(PORT, () => {
    console.log(`\n⚡ Task 26 Async Orchestrator active at http://localhost:${PORT}`);
    console.log(`Endpoint: GET /api/async-data (Integrated Async Handler)\n`);
});
