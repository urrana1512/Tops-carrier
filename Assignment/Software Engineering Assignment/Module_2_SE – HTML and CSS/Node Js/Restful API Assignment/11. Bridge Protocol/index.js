const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4010;

// Task 11: Implementing CORS
// Requirement: Configure CORS to allow requests
// Option 1: Allow All (Permissive Bridge)
app.use(cors());

/* 
// Option 2: Restrictive Bridge (Production Standard)
const corsOptions = {
    origin: 'http://trusted-client.com',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
*/

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/cross-handshake', (req, res) => {
    const origin = req.headers.origin || "Same-Origin";
    console.log(`\n🌉 [BRIDGE_HANDSHAKE] Signal received from: ${origin}`);
    
    res.json({
        status: "SUCCESS",
        message: "CORS Handshake complete. The bridge is synchronized.",
        origin_detected: origin,
        policy: "PERMISSIVE_ALL"
    });
});

app.listen(PORT, () => {
    console.log(`\n🌉 Task 11 Bridge Protocol active at http://localhost:${PORT}`);
    console.log(`CORS Policy: PERMISSIVE (All origins authorized)\n`);
});
