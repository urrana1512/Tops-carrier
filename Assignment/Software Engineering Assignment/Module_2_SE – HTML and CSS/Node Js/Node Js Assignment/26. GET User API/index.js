const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4003;

// Requirement: Include at least three sample users
const userData = [
    { id: 101, name: "Udit Rana", role: "MERN Stack Architect", status: "Active" },
    { id: 102, name: "Aarav Sharma", role: "DevOps Sentinel", status: "Away" },
    { id: 103, name: "Ishani Verma", role: "UI/UX Visionary", status: "Active" },
    { id: 104, name: "Vikram Malhotra", role: "Backend Engineer", status: "Offline" }
];

// Task 26: Handling HTTP GET Requests
const server = http.createServer((req, res) => {
    console.log(`📡 [API_INGRESS] Request Method: ${req.method} | Endpoint: ${req.url}`);

    // Requirement: Handle GET request to /api/users
    if (req.method === 'GET' && req.url === '/api/users') {
        // Requirement: Use res.setHeader to set content type to application/json
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        
        // Respond with the JSON array
        res.end(JSON.stringify(userData));
        console.log(`✅ [API_DISPATCH] Successfully delivered ${userData.length} user records.`);
    } 
    else if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
        // Serve the UI to visualize the API
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: UI Load Failed');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Endpoint Not Found", code: 404 }));
    }
});

server.listen(PORT, () => {
    console.log(`\n💎 Task 26 User API running at http://localhost:${PORT}`);
    console.log(`API Endpoint: http://localhost:${PORT}/api/users\n`);
});
