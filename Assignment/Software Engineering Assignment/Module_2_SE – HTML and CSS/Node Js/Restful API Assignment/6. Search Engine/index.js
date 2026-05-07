const express = require('express');
const path = require('path');
const app = express();
const PORT = 4005;

app.use(express.static(path.join(__dirname, 'public')));

// Mock database
const registry = [
    { id: 1, name: "Nexus-7 Tablet", category: "Electronics" },
    { id: 2, name: "Cyber-Deck Keyboard", category: "Peripherals" },
    { id: 3, name: "Neural-Link VR", category: "Electronics" },
    { id: 4, name: "Void-Shift SSD", category: "Storage" }
];

// Task 6: Using Query Parameters
// Requirement: Modify the GET /api/items route to accept optional query parameters
// Requirement: Filter the list based on the search query
app.get('/api/items', (req, res) => {
    const { search } = req.query;
    console.log(`\n🔍 [SEARCH_DISCOVERY] Filter requested: ${search || 'NONE'}`);

    if (search) {
        const keyword = search.toLowerCase();
        const filteredResults = registry.filter(item => 
            item.name.toLowerCase().includes(keyword) || 
            item.category.toLowerCase().includes(keyword)
        );

        // Requirement: Respond with a message if no items match
        if (filteredResults.length === 0) {
            console.warn(`⚠️ [SEARCH_EMPTY] No matches for "${search}" in the archive.`);
            return res.json({
                status: "EMPTY",
                message: `No items matching "${search}" were found in the registry.`,
                data: []
            });
        }

        console.log(`✅ [SEARCH_SUCCESS] Found ${filteredResults.length} matches for "${search}".`);
        return res.json({
            status: "SUCCESS",
            count: filteredResults.length,
            query: search,
            data: filteredResults
        });
    }

    // Default response (no filter)
    res.json({ status: "SUCCESS", count: registry.length, data: registry });
});

app.listen(PORT, () => {
    console.log(`\n🕵️ Task 6 Search Engine active at http://localhost:${PORT}`);
    console.log(`Dynamic filtering active: GET /api/items?search=keyword\n`);
});
