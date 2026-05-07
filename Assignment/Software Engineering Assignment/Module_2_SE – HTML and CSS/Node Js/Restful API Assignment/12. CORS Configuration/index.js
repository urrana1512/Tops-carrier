const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4011;

// Task 12: Implementing CORS (Specific Origin Configuration)
// Requirement: Configure CORS to allow requests from specific origins
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl) 
        // or requests from specific trusted origins
        const whitelist = ['http://localhost:4011', 'http://127.0.0.1:4011'];
        
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.warn(`🛑 [BRIDGE_SENTINEL] Blocked unauthorized origin: ${origin}`);
            callback(new Error('CORS_RESTRICTION: Origin not authorized by Nexus Policy.'));
        }
    },
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
};

// Apply Granular CORS
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/secure-handshake', (req, res) => {
    const origin = req.headers.origin || "Same-Origin (Trusted)";
    console.log(`\n🌉 [BRIDGE_SENTINEL] Secure handshake successful for: ${origin}`);
    
    res.json({
        status: "SUCCESS",
        message: "Granular CORS Handshake complete.",
        authorized_origin: origin,
        policy: "RESTRICTIVE_WHITELIST"
    });
});

// Centralized error handling to catch CORS errors
app.use((err, req, res, next) => {
    if (err.message.includes('CORS_RESTRICTION')) {
        return res.status(403).json({
            status: "DENIED",
            error: "CORS_POLICY_VIOLATION",
            message: err.message
        });
    }
    next(err);
});

app.listen(PORT, () => {
    console.log(`\n🌉 Task 12 CORS Configuration active at http://localhost:${PORT}`);
    console.log(`CORS Policy: RESTRICTIVE (Whitelist filtering active)\n`);
});
