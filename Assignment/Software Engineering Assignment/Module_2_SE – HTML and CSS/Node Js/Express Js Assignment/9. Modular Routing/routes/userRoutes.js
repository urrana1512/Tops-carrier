const express = require('express');
// Requirement: Create a new router for user-related routes
const router = express.Router();

// Mock User Database
let users = [
    { id: 1, name: "Udit Rana", role: "Architect" },
    { id: 2, name: "Deepmind Bot", role: "Assistant" }
];

// Requirement: GET /api/users - respond with a list of users
router.get('/', (req, res) => {
    console.log("👥 [ROUTER_GET] Dispatching user registry.");
    res.json({ status: "SUCCESS", count: users.length, data: users });
});

// Requirement: POST /api/users - add a new user
router.post('/', (req, res) => {
    const { name, role } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name || "Anonymous_User",
        role: role || "Guest"
    };
    
    users.push(newUser);
    console.log(`➕ [ROUTER_POST] New identity committed: ${newUser.name}`);
    res.status(201).json({ status: "CREATED", data: newUser });
});

module.exports = router;
