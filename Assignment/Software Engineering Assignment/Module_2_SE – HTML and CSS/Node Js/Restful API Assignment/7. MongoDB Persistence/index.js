const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 4006;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Task 7: Connecting to a MongoDB Database
// Requirement: Set up a connection to a MongoDB database
const DB_URI = 'mongodb://127.0.0.1:27017/restful_persistence_db';

mongoose.connect(DB_URI)
    .then(() => console.log("⚙️ [DATABASE_SYNC] Connected to MongoDB Archive."))
    .catch(err => console.error("❌ [DATABASE_SYNC] Connection failure:", err));

// Requirement: Create a Schema and Model for Items
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, default: "General" },
    createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

// RESTful ENDPOINTS with MongoDB Integration

// 1. CREATE - POST /api/items
app.post('/api/items', async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newItem = await Item.create({ name, price, category });
        console.log(`➕ [REST_POST] Persistent record committed: "${name}"`);
        res.status(201).json({ status: "SUCCESS", data: newItem });
    } catch (err) {
        res.status(400).json({ status: "ERROR", message: err.message });
    }
});

// 2. READ (ALL) - GET /api/items
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        console.log("📚 [REST_GET] Retrieving data from MongoDB vault.");
        res.json({ status: "SUCCESS", count: items.length, data: items });
    } catch (err) {
        res.status(500).json({ status: "ERROR", message: "Vault retrieval failed." });
    }
});

// 3. UPDATE - PUT /api/items/:id
app.put('/api/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedItem) return res.status(404).json({ status: "ERROR", message: "ID not found." });
        console.log(`📝 [REST_PUT] Persistent record ID ${req.params.id} synchronized.`);
        res.json({ status: "SUCCESS", data: updatedItem });
    } catch (err) {
        res.status(400).json({ status: "ERROR", message: err.message });
    }
});

// 4. DELETE - DELETE /api/items/:id
app.delete('/api/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ status: "ERROR", message: "ID not found." });
        console.log(`🗑️ [REST_DELETE] Record ID ${req.params.id} purged from MongoDB.`);
        res.json({ status: "SUCCESS", message: "Record purged." });
    } catch (err) {
        res.status(400).json({ status: "ERROR", message: "Decommissioning failed." });
    }
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 7 MongoDB Persistence active at http://localhost:${PORT}`);
    console.log(`Persistence Layer: MongoDB Cluster (${DB_URI})\n`);
});
