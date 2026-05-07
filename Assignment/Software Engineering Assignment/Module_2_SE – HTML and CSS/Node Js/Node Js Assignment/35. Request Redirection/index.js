const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4005;

// Task 35: Redirecting Requests
const server = http.createServer((req, res) => {
    console.log(`📡 [TRAFFIC_INTERCEPT] URL: ${req.url}`);

    // Requirement: Set up a redirect from /old-url to /new-url
    if (req.url === '/old-url') {
        console.log(`🔄 [REDIRECT_301] Legacy URL accessed. Rerouting to /new-url...`);
        
        // Requirement: Use res.writeHead to set the status code to 301
        res.writeHead(301, {
            'Location': '/new-url'
        });
        res.end();
        return;
    }

    if (req.url === '/new-url') {
        const filePath = path.join(__dirname, 'public', 'new-url.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the New URL!');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
        return;
    }

    // Default dashboard
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        return;
    }

    res.writeHead(404);
    res.end('404: Not Found');
});

server.listen(PORT, () => {
    console.log(`\n🚀 Task 35 Path Migrator online at http://localhost:${PORT}`);
    console.log(`Redirect active: /old-url ➔ /new-url\n`);
});
