const express = require('express');
const path = require('path');
const app = express();
const PORT = 4012;

app.use(express.static(path.join(__dirname, 'public')));

// Mock Registry
const items = [
    { id: 1, name: "Nexus-Node", type: "Core" },
    { id: 2, name: "Shield-Vector", type: "Guard" }
];

// Task 13: Versioning Your API
// Requirement: Set up multiple versions (v1 and v2)

// --- VERSION 1 ROUTER (Legacy Support) ---
const v1Router = express.Router();
v1Router.get('/items', (req, res) => {
    console.log("💾 [API_EVOLUTION] v1 Ingress: Legacy data requested.");
    res.json({
        api_version: "v1.0",
        data: items
    });
});

// --- VERSION 2 ROUTER (Enhanced Features) ---
const v2Router = express.Router();
v2Router.get('/items', (req, res) => {
    console.log("🚀 [API_EVOLUTION] v2 Ingress: Enhanced metadata requested.");
    
    // v2 returns extra metadata and status mapping
    const enhancedItems = items.map(item => ({
        ...item,
        status: "OPERATIONAL",
        last_sync: new Date().toISOString(),
        hash: `SHA-${Math.floor(Math.random() * 100000)}`
    }));

    res.json({
        api_version: "v2.0",
        stability: "Production",
        count: enhancedItems.length,
        data: enhancedItems
    });
});

// Mount Routers
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(PORT, () => {
    console.log(`\n🧬 Task 13 Evolution Engine active at http://localhost:${PORT}`);
    console.log(`Version Branches: /api/v1 (Legacy) | /api/v2 (Enhanced)\n`);
});
