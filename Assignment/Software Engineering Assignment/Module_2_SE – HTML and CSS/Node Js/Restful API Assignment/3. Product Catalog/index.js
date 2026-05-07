const express = require('express');
const path = require('path');
const app = express();
const PORT = 4002;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (Product Registry)
let items = [
    { id: 1, name: "Nexus-7 Tablet", price: 499, category: "Electronics" },
    { id: 2, name: "Cyber-Deck Keyboard", price: 129, category: "Peripherals" }
];

// Requirement: GET /api/items - Retrieve all items
app.get('/api/items', (req, res) => {
    console.log("📦 [CATALOG_GET] Dispatching inventory registry.");
    res.json({ status: "SUCCESS", count: items.length, data: items });
});

// Requirement: GET /api/items/:id - Retrieve a single item by ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ status: "ERROR", message: "Item not found in catalog." });
    }
    console.log(`🔍 [CATALOG_GET] Record located: ID ${req.params.id}`);
    res.json({ status: "SUCCESS", data: item });
});

// Requirement: POST /api/items - Create a new item
app.post('/api/items', (req, res) => {
    const { name, price, category } = req.body;
    if (!name || !price) {
        return res.status(400).json({ status: "ERROR", message: "Incomplete payload. Name and Price are mandatory." });
    }

    const newItem = {
        id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        name,
        price,
        category: category || "Uncategorized"
    };

    items.push(newItem);
    console.log(`➕ [CATALOG_POST] New asset ingested: "${name}"`);
    res.status(201).json({ status: "CREATED", data: newItem });
});

// Requirement: PUT /api/items/:id - Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ status: "ERROR", message: "ID mismatch. Item not found." });
    }

    const { name, price, category } = req.body;
    items[itemIndex] = {
        ...items[itemIndex],
        name: name || items[itemIndex].name,
        price: price || items[itemIndex].price,
        category: category || items[itemIndex].category
    };

    console.log(`📝 [CATALOG_PUT] Synchronization complete for ID ${id}`);
    res.json({ status: "UPDATED", data: items[itemIndex] });
});

// Requirement: DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = items.length;
    items = items.filter(i => i.id !== id);

    if (items.length < initialLength) {
        console.log(`🗑️ [CATALOG_DELETE] Decommissioned asset ID ${id} from registry.`);
        res.json({ status: "DELETED", id_purged: id });
    } else {
        res.status(404).json({ status: "ERROR", message: "ID mismatch. No record purged." });
    }
});

app.listen(PORT, () => {
    console.log(`\n📦 Task 3 Product Catalog active at http://localhost:${PORT}`);
    console.log(`REST Interface: Full CRUD Lifecycle (GET, POST, PUT, DELETE) active.\n`);
});
