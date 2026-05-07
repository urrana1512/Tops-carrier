const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');

const app = express();
const PORT = 3009;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Requirement: Connect your Express application to a MongoDB database using Mongoose
const MONGODB_URI = 'mongodb://localhost:27017/express_nexus';

mongoose.connect(MONGODB_URI)
    .then(() => console.log(`\n🔋 [DATABASE_CONNECTED] Linked to MongoDB: ${MONGODB_URI}`))
    .catch(err => console.error(`\n❌ [DATABASE_ERROR] Connection failed: ${err.message}`));

// Task 10: MongoDB Integration
// Requirement: Set up a POST route (/api/users) to save user data
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    
    console.log(`\n📥 [DATABASE_INTAKE] Attempting to commit identity: ${name}`);

    try {
        const newUser = new User({ name, email });
        // Save to MongoDB
        const savedUser = await newUser.save();
        
        console.log(`✅ [DATABASE_COMMIT] Success! ID: ${savedUser._id}`);
        res.status(201).json({
            status: "SUCCESS",
            message: "Identity persisted to the Data Vault.",
            data: savedUser
        });
    } catch (err) {
        console.error(`⚠️ [DATABASE_FAULT] Commit failed: ${err.message}`);
        res.status(400).json({
            status: "ERROR",
            message: err.code === 11000 ? "Email already registered." : err.message
        });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json({ status: "SUCCESS", data: users });
    } catch (err) {
        res.status(500).json({ status: "ERROR", message: "Failed to fetch data vault records." });
    }
});

app.listen(PORT, () => {
    console.log(`\n🏛️ Task 10 Data Vault online at http://localhost:${PORT}`);
    console.log(`Awaiting database-backed identities...\n`);
});
