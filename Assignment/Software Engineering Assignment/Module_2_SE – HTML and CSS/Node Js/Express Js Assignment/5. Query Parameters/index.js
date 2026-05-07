const express = require('express');
const path = require('path');
const app = express();
const PORT = 3004;

app.use(express.static(path.join(__dirname, 'public')));

// Task 5: Handling Query Parameters
// Requirement: Create a route /api/search that accepts a query parameter
app.get('/api/search', (req, res) => {
    const searchTerm = req.query.q || "No query provided";
    
    // Requirement: Log the received query parameter to the console
    console.log(`\n🔍 [QUERY_INTERCEPT] Incoming search term: "${searchTerm}"`);

    // Requirement: Respond with a JSON object including the search term and a message
    res.json({
        query: searchTerm,
        message: "Search received",
        timestamp: new Date().toISOString(),
        engine: "Express_Search_Alpha"
    });
});

app.listen(PORT, () => {
    console.log(`\n🔎 Task 5 Search Portal online at http://localhost:${PORT}`);
    console.log(`Example endpoint: /api/search?q=express\n`);
});
