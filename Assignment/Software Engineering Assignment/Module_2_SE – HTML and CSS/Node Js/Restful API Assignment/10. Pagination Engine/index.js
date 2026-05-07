const express = require('express');
const path = require('path');
const app = express();
const PORT = 4009;

app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (Extended Dataset)
const registry = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Nexus-Asset-${i + 1}`,
    code: `AX-${1000 + i}`,
    status: i % 2 === 0 ? "ACTIVE" : "STBY"
}));

// Task 10: Implementing Pagination
// Requirement: Allow clients to request specific pages using page and limit query parameters
app.get('/api/items', (req, res) => {
    // Default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    console.log(`\n📄 [PAGINATION_ENGINE] Request: Page ${page}, Limit ${limit}`);

    // Requirement: Calculate the appropriate items to return
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = registry.slice(startIndex, endIndex);

    // Requirement: Respond with paginated list and metadata
    const totalItems = registry.length;
    const totalPages = Math.ceil(totalItems / limit);

    res.json({
        status: "SUCCESS",
        metadata: {
            total_items: totalItems,
            total_pages: totalPages,
            current_page: page,
            limit: limit,
            has_next: page < totalPages,
            has_prev: page > 1
        },
        data: results
    });
});

app.listen(PORT, () => {
    console.log(`\n📟 Task 10 Pagination Engine active at http://localhost:${PORT}`);
    console.log(`Dynamic viewporting enabled: GET /api/items?page=1&limit=10\n`);
});
