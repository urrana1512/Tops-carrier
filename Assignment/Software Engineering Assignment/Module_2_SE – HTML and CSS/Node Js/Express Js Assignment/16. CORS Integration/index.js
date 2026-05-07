const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3015;

// Task 16: Implementing CORS
// Requirement: Use the cors middleware to allow requests from different origins
// Standard Configuration: Allow all origins
app.use(cors());

/* 
// Requirement: Configure CORS to only allow specific origins if desired
const corsOptions = {
    origin: 'http://localhost:5500', // Example: only allow VS Code Live Server
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
*/

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/cross-data', (req, res) => {
    console.log(`\n🌉 [BRIDGE_HANDSHAKE] Request received from origin: ${req.headers.origin || 'Same-Origin'}`);
    res.json({
        status: "SUCCESS",
        message: "Data has successfully crossed the domain bridge.",
        security_policy: "CORS_ENABLED",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`\n🌉 Task 16 Bridge Sentinel active at http://localhost:${PORT}`);
    console.log(`CORS Policy: PERMISSIVE (All origins allowed)\n`);
});
