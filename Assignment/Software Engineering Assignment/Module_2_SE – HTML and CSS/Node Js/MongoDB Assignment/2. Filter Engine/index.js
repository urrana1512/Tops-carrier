const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5002;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [SEARCH_ENGINE] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [SEARCH_ENGINE_FAULT]:', err));

// User Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('FilteredUser', userSchema);

// Seed Data helper (to ensure we have data to filter)
const seedData = async () => {
    const count = await User.countDocuments();
    if (count === 0) {
        await User.insertMany([
            { name: "Alice Nexus", email: "alice@nexus.com" },
            { name: "Bob Vector", email: "bob@vector.com" },
            { name: "Charlie Shield", email: "charlie@shield.com" }
        ]);
        console.log("📦 [SEARCH_ENGINE] Cluster seeded with initial identities.");
    }
};
seedData();

// --- TASK 2: USING QUERY PARAMETERS ---

// Requirement: Modify the GET route (/users) to accept optional query parameters
app.get('/users', async (req, res) => {
    console.log("🔍 [SEARCH_ENGINE] Ingress Audit: Query detected ->", req.query);
    
    try {
        const { name, email } = req.query;
        let query = {};

        // Requirement: Use these parameters to filter the results
        if (name) {
            // Partial search using Regex (Case-insensitive)
            query.name = { $regex: name, $options: 'i' };
        }
        if (email) {
            query.email = { $regex: email, $options: 'i' };
        }

        const users = await User.find(query).sort({ createdAt: -1 });
        
        console.log(`✅ [SEARCH_ENGINE] Filter complete: ${users.length} identity found.`);
        res.json(users);
    } catch (error) {
        res.status(500).json({ status: "FAIL", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🔍 Task 2 Filter Engine active at http://localhost:${PORT}`);
    console.log(`Route: GET /users?name=keyword&email=keyword\n`);
});
