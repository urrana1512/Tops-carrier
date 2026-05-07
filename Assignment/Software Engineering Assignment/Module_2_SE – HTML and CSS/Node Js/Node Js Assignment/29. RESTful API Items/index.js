const express = require('express');
const path = require('path');
const app = express();
const PORT = 6001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Requirement: Use a simple in-memory array to store the items
let items = [
    { id: 1, name: "Neural Link Processor", category: "Hardware", stock: 45 },
    { id: 2, name: "Quantum Encryption Key", category: "Security", stock: 12 },
    { id: 3, name: "Holographic Display", category: "Visuals", stock: 30 }
];

// Task 29: Creating a Simple RESTful API

// 1. GET /api/items to return a list of items
app.get('/api/items', (req, res) => {
    console.log(`🔍 [GET] Fetching entire inventory registry.`);
    res.json(items);
});

// 2. POST /api/items to add a new item
app.post('/api/items', (req, res) => {
    const { name, category, stock } = req.body;
    if (!name || !category) {
        return res.status(400).json({ error: "Name and Category are required." });
    }
    const newItem = {
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
        name,
        category,
        stock: stock || 0
    };
    items.push(newItem);
    console.log(`➕ [POST] New asset committed: ${name} (ID: ${newItem.id})`);
    res.status(201).json(newItem);
});

// 3. PUT /api/items/:id to update an existing item by ID
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, category, stock } = req.body;
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ error: "Asset not found in registry." });
    }

    items[itemIndex] = { ...items[itemIndex], name, category, stock };
    console.log(`🔄 [PUT] Updated asset: ${name} (ID: ${id})`);
    res.json(items[itemIndex]);
});

// 4. DELETE /api/items/:id to delete an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = items.length;
    items = items.filter(i => i.id !== id);

    if (items.length === initialLength) {
        return res.status(404).json({ error: "Decommissioning failed: ID not found." });
    }

    console.log(`🗑️ [DELETE] Asset decommissioned from registry (ID: ${id})`);
    res.json({ message: "Asset successfully purged from inventory.", id });
});

app.listen(PORT, () => {
    console.log(`\n📦 Task 29 Inventory Nexus API running at http://localhost:${PORT}`);
    console.log(`RESTful Endpoints: GET, POST, PUT, DELETE /api/items\n`);
});
