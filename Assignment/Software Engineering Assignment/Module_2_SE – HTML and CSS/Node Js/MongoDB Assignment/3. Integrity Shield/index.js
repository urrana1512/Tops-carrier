const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const path = require('path');
const app = express();
const PORT = 5003;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [INTEGRITY_SHIELD] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [INTEGRITY_SHIELD_FAULT]:', err));

// User Model
const User = mongoose.model('ValidatedUser', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}));

// --- TASK 3: VALIDATING USER INPUT ---

// Validation Middleware Array
const userValidationRules = [
    // Requirement: Use express-validator package to validate user input
    body('name').trim().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long.'),
    body('email').isEmail().withMessage('Please provide a valid corporate email address.').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Security Key must be at least 6 characters long.')
];

// Requirement: Add validation for user input in the POST route
app.post('/users', userValidationRules, async (req, res) => {
    // Requirement: Return appropriate error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("🛑 [INTEGRITY_SHIELD] Payload rejected: Validation failed.");
        return res.status(400).json({ 
            status: "DENIED",
            errors: errors.array() 
        });
    }

    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        
        console.log(`👤 [INTEGRITY_SHIELD] Payload authorized & persisted: ${name}`);
        res.status(201).json({ status: "SUCCESS", message: "User identity secured in registry." });
    } catch (error) {
        console.error("🚨 [DATABASE_FAULT]:", error.message);
        res.status(500).json({ status: "ERROR", message: "Database synchronization failed." });
    }
});

app.get('/users', async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 3 Integrity Shield active at http://localhost:${PORT}`);
    console.log(`Validator: express-validator (POST /users auditing enabled)\n`);
});
