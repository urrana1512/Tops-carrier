const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;

// Task 23: Create a simple web server using the built-in http module
const server = http.createServer((req, res) => {
    // Log the incoming request to the console
    console.log(`📡 [INCOMING_REQUEST] Method: ${req.method} | URL: ${req.url}`);

    // Requirement: Respond with a "Hello World" message for GET requests
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/index.html') {
            // Serve the premium UI
            const filePath = path.join(__dirname, 'public', 'index.html');
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error: Failed to load UI');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
        } else if (req.url === '/api/hello') {
            // Pure JSON response for verification
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Hello World", status: "Active", source: "http_module" }));
        } else {
            // Default Hello World response
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Core Nexus Server (Built-in http) active at http://localhost:${PORT}`);
    console.log(`Direct communication channel established.\n`);
});
