const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5008;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [FAULT_TOLERANCE] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [FAULT_TOLERANCE_INIT_ERROR]:', err));

// User Model
const User = mongoose.model('FaultUser', new mongoose.Schema({
    name: String,
    email: String
}));

// --- TASK 8: HANDLING ERRORS (CENTRALIZED) ---

// Route 1: Intentional Database Error (Invalid ID Format)
app.get('/users/:id', async (req, res, next) => {
    console.log(`🔍 [FAULT_TOLERANCE] Probing identity: ${req.params.id}`);
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            const err = new Error("Identity not found in cluster.");
            err.status = 404;
            throw err;
        }
        res.json(user);
    } catch (error) {
        // Requirement: Pass error to centralized middleware
        next(error);
    }
});

// Route 2: Generic Server Error
app.get('/api/trigger-fault', (req, res, next) => {
    console.log("💣 [FAULT_TOLERANCE] Simulating internal system collapse...");
    const error = new Error("INTERNAL_CORE_FAULT: Logic stream interrupted.");
    error.status = 500;
    next(error);
});

// Requirement: Create a centralized error-handling middleware
// Note: Standard 4-argument signature is mandatory (err, req, res, next)
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    
    console.error(`🚨 [CENTRALIZED_ERROR_HANDLING] Status: ${statusCode} | Message: ${err.message}`);
    
    // Requirement: Return appropriate responses
    res.status(statusCode).json({
        status: "FAIL",
        error: {
            code: statusCode,
            message: err.message,
            timestamp: new Date().toISOString()
        }
    });
});

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 8 Fault Tolerance active at http://localhost:${PORT}`);
    console.log(`Logic: Global Error Middleware { err, req, res, next }\n`);
});
