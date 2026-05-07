const express = require('express');
const path = require('path');
const app = express();
const PORT = 5002;

app.use(express.static(path.join(__dirname, 'public')));

// Task 31: Using Query Parameters
// Requirement: Create an HTTP server that handles a GET request to /api/search with query parameters
app.get('/api/search', (req, res) => {
    // Requirement: Log the received query parameters to the console
    console.log(`\n🔍 [QUERY_INTERCEPT] Incoming search parameters:`, req.query);

    const searchQuery = req.query.q || "No query provided";
    
    // Requirement: Respond with a JSON object containing the search query and a message
    const responsePayload = {
        query: searchQuery,
        message: `You searched for: ${searchQuery}`,
        timestamp: new Date().toISOString(),
        engine: "Nexus Search v1.0"
    };

    console.log(`✅ [SEARCH_DISPATCH] Result generated for: "${searchQuery}"\n`);
    res.json(responsePayload);
});

app.listen(PORT, () => {
    console.log(`\n🔎 Task 31 Search Engine online at http://localhost:${PORT}`);
    console.log(`Example: http://localhost:${PORT}/api/search?q=nodejs\n`);
});
