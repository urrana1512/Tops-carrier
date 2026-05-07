const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5004;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [PAGINATED_LEDGER] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [LEDGER_FAULT]:', err));

// User Model
const User = mongoose.model('PaginatedUser', new mongoose.Schema({
    name: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
}));

// Seed Data helper (12 users for pagination testing)
const seedLedger = async () => {
    const count = await User.countDocuments();
    if (count < 12) {
        const dummyData = Array.from({ length: 12 }).map((_, i) => ({
            name: `User Segment ${i + 1}`,
            email: `segment_${i + 1}@ledger.io`
        }));
        await User.insertMany(dummyData);
        console.log("📦 [PAGINATED_LEDGER] Cluster seeded with 12 segments.");
    }
};
seedLedger();

// --- TASK 4: IMPLEMENTING PAGINATION ---

// Requirement: Modify the GET route (/users) to accept page and limit parameters
app.get('/users', async (req, res) => {
    try {
        let { page = 1, limit = 5 } = req.query;
        
        // Sanitize inputs
        page = parseInt(page);
        limit = parseInt(limit);
        const skip = (page - 1) * limit;

        console.log(`📑 [PAGINATED_LEDGER] Retrieving Window: Page ${page} (Limit: ${limit})`);

        // Requirement: Use Mongoose's .skip() and .limit() methods
        const users = await User.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalItems = await User.countDocuments();

        res.json({
            status: "SUCCESS",
            metadata: {
                totalItems,
                currentPage: page,
                totalPages: Math.ceil(totalItems / limit),
                pageSize: users.length
            },
            data: users
        });
    } catch (error) {
        res.status(500).json({ status: "FAIL", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n📑 Task 4 Paginated Ledger active at http://localhost:${PORT}`);
    console.log(`Endpoint: GET /users?page=1&limit=5\n`);
});
