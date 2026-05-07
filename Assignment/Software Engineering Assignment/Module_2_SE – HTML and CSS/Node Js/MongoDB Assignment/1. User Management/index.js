const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5001;

// --- CONFIGURATION ---
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- MONGODB CONNECTION ---
// Requirement: Connect Node.js application to a MongoDB database
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
// Note: For MongoDB Atlas, replace the URI with your Atlas Connection String

mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [DATABASE_SYNC] Connected to MongoDB Registry.'))
    .catch(err => console.error('🚨 [DATABASE_FAULT] Connection failed:', err));

// --- CREATING A MODEL ---
// Requirement: Define a Mongoose model for a User collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// --- CRUD ROUTES ---

// POST: Creating and Saving Documents
// Requirement: Implement POST /users to create a new document
app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        
        console.log(`👤 [DATABASE_POST] Identity Created: ${name}`);
        res.status(201).json({
            message: "User registered in registry successfully.",
            user: savedUser
        });
    } catch (error) {
        console.error("🚨 [DATABASE_POST_FAIL]:", error.message);
        res.status(400).json({ status: "FAIL", message: error.message });
    }
});

// GET: Retrieving Documents
// Requirement: Implement GET /users to retrieve all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ status: "FAIL", message: error.message });
    }
});

// PUT: Updating Documents
// Requirement: Implement PUT /users/:id to update an existing document
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        
        console.log(`📝 [DATABASE_PUT] Identity Synchronized: ${id}`);
        res.json({
            message: "User synchronized successfully.",
            user: updatedUser
        });
    } catch (error) {
        res.status(400).json({ status: "FAIL", message: error.message });
    }
});

// DELETE: Deleting Documents
// Requirement: Implement DELETE /users/:id to delete a document
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        
        console.log(`🗑️ [DATABASE_DELETE] Identity Purged: ${id}`);
        res.json({ message: "User purged from registry successfully." });
    } catch (error) {
        res.status(400).json({ status: "FAIL", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🍃 Task 1 User Registry active at http://localhost:${PORT}`);
    console.log(`Schema: { name, email, password } | Target: mongodb_assignment_db\n`);
});
