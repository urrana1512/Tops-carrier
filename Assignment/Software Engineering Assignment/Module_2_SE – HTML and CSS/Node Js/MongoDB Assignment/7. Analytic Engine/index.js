const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 5007;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [ANALYTIC_ENGINE] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [ANALYTIC_FAULT]:', err));

// User Model
const User = mongoose.model('AnalyticUser', new mongoose.Schema({
    name: String,
    email: String,
}));

// Seed Data for meaningful aggregation
const seedAnalytics = async () => {
    const count = await User.countDocuments();
    if (count === 0) {
        await User.insertMany([
            { name: "Alpha", email: "alpha@nexus.com" },
            { name: "Beta", email: "beta@nexus.com" },
            { name: "Gamma", email: "gamma@shield.io" },
            { name: "Delta", email: "delta@vector.net" },
            { name: "Epsilon", email: "epsilon@shield.io" }
        ]);
        console.log("📦 [ANALYTIC_ENGINE] Data seeded for domain analysis.");
    }
};
seedAnalytics();

// --- TASK 7: AGGREGATING DATA ---

// Requirement: Create a route that returns the total number of users and other stats
app.get('/stats', async (req, res) => {
    console.log("📊 [ANALYTIC_ENGINE] Initiating aggregation pipeline...");
    try {
        // Requirement: Use Mongoose's .aggregate() method
        
        // 1. Domain Analysis Pipeline
        const domainStats = await User.aggregate([
            {
                $project: {
                    domain: { $arrayElemAt: [{ $split: ["$email", "@"] }, 1] }
                }
            },
            {
                $group: {
                    _id: "$domain",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        // 2. Global Totals
        const globalStats = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: 1 },
                    avgIdentities: { $avg: 1 } // Example of another stat
                }
            }
        ]);

        console.log("✅ [ANALYTIC_ENGINE] Computation complete.");
        res.json({
            status: "SUCCESS",
            summary: globalStats[0] || { totalUsers: 0 },
            domains: domainStats
        });
    } catch (error) {
        console.error("🚨 [ANALYTIC_FAULT]:", error.message);
        res.status(500).json({ status: "ERROR", message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n📊 Task 7 Analytic Engine active at http://localhost:${PORT}`);
    console.log(`Endpoint: GET /stats (Aggregation Framework Enabled)\n`);
});
