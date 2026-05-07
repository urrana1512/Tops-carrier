const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const PORT = 5005;
const SECRET_KEY = "NEXUS_VAULT_SECRET";

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [IDENTITY_VAULT] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [VAULT_FAULT]:', err));

// User Model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('AuthUser', userSchema);

// --- TASK 5: SETTING UP AUTHENTICATION SYSTEM ---

// Requirement: Implement a registration route with bcrypt hashing
app.post('/register', async (req, res) => {
    console.log("🔐 [VAULT_REGISTER] Initiating identity encryption...");
    try {
        const { email, password } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Identity already exists." });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        console.log(`✅ [VAULT_REGISTER] Success: ${email} persisted with hashed key.`);
        res.status(201).json({ status: "SUCCESS", message: "Identity registered and encrypted." });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
});

// Requirement: Implement a login route and return a JWT
app.post('/login', async (req, res) => {
    console.log("🔑 [VAULT_LOGIN] Initiating credential validation...");
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid credentials." });

        // Compare bcrypt hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

        // Generate JWT
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

        console.log(`🔓 [VAULT_LOGIN] Success: Bearer token generated for ${email}`);
        res.json({
            status: "AUTHORIZED",
            token: token,
            message: "Access granted."
        });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n🔐 Task 5 Identity Vault active at http://localhost:${PORT}`);
    console.log(`Security: Bcrypt Hashing + JWT Stateless Auth\n`);
});
