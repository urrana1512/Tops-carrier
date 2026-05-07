const express = require('express');
const path = require('path');
const app = express();
const PORT = 4003;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock database
let registry = [];

// Task 4: Handling Request and Response
// Requirement: Accept JSON data for creating a new item
// Requirement: Validate incoming data and send appropriate responses
// Requirement: Use res.status() method to set the HTTP status code
app.post('/api/items', (req, res) => {
    const { name, quantity } = req.body;
    
    console.log("\n📥 [INTAKE_MONITOR] Evaluating incoming payload...");

    // 1. Validation Logic
    if (!name || typeof name !== 'string' || name.trim() === "") {
        console.warn("⚠️ [PROTOCOL_FAULT] Rejection: Invalid or missing 'name' attribute.");
        return res.status(400).json({
            status: "ERROR",
            code: 400,
            message: "Bad Request: 'name' is mandatory and must be a valid string."
        });
    }

    if (quantity === undefined || typeof quantity !== 'number' || quantity < 0) {
        console.warn("⚠️ [PROTOCOL_FAULT] Rejection: Invalid 'quantity' attribute.");
        return res.status(400).json({
            status: "ERROR",
            code: 400,
            message: "Bad Request: 'quantity' is mandatory and must be a non-negative number."
        });
    }

    // 2. Data Commitment
    const newItem = {
        id: registry.length + 1,
        name: name.trim(),
        quantity,
        committedAt: new Date().toISOString()
    };

    registry.push(newItem);

    // 3. Success Response (201 Created)
    console.log(`✅ [INTAKE_SUCCESS] Asset "${name}" successfully validated and committed.`);
    res.status(201).json({
        status: "SUCCESS",
        code: 201,
        message: "Resource successfully created in the Nexus registry.",
        data: newItem
    });
});

app.get('/api/items', (req, res) => {
    res.json({ status: "SUCCESS", data: registry });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 4 Protocol Validation active at http://localhost:${PORT}`);
    console.log(`Intake filtering active for: POST /api/items\n`);
});
