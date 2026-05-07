const express = require('express');
const path = require('path');
const app = express();
const PORT = 4014;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store for the client to consume
let inventory = [
    { id: 1, name: "Premium Lens", category: "Optics", price: 299 },
    { id: 2, name: "Matte Chassis", category: "Hardware", price: 150 }
];

// --- CRUD ENDPOINTS ---

// GET: Retrieve all items
app.get('/api/items', (req, res) => {
    res.json(inventory);
});

// POST: Add new item
app.post('/api/items', (req, res) => {
    const { name, category, price } = req.body;
    const newItem = { id: Date.now(), name, category, price: Number(price) };
    inventory.push(newItem);
    console.log(`➕ [BACKEND] Resource created: ${name}`);
    res.status(201).json(newItem);
});

// PUT: Update existing item
app.put('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        inventory[index] = { ...inventory[index], ...req.body };
        console.log(`📝 [BACKEND] Resource ${id} synchronized.`);
        res.json(inventory[index]);
    } else {
        res.status(404).json({ message: "Not Found" });
    }
});

// DELETE: Remove item
app.delete('/api/items/:id', (req, res) => {
    const id = Number(req.params.id);
    inventory = inventory.filter(i => i.id !== id);
    console.log(`🗑️ [BACKEND] Resource ${id} purged.`);
    res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`\n💎 Task 15 Nexus Backend active at http://localhost:${PORT}`);
    console.log(`Ready for client handshake.\n`);
});
