const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // Requirement: Listen on a specified port (e.g., 3000)

// Task 24: Creating a Basic HTTP Server
const server = http.createServer((req, res) => {
    // Log the incoming request
    console.log(`📡 [INTERCEPT] Client accessing port ${PORT} | Path: ${req.url}`);

    if (req.url === '/' || req.url === '/index.html') {
        // Serve a premium visual to represent the "Hello World" milestone
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        // Requirement: Respond with a plain text message like "Hello, World!"
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }
});

server.listen(PORT, () => {
    // Requirement: Log a message to the console when the server starts.
    console.log(`\n✅ [SERVER_START] Basic HTTP Server is now online.`);
    console.log(`📍 Listening at: http://localhost:${PORT}`);
    console.log(`🚀 STANDBY_MODE: Ready to process incoming connections.\n`);
});
