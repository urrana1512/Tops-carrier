const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4002;

// Task 25: Handling Different URL Routes
const server = http.createServer((req, res) => {
    // Requirement: Log the requested URL to the console.
    console.log(`🧭 [ROUTE_TRAFFIC] Requested URL: ${req.url}`);

    // Manual Routing Logic
    switch (req.url) {
        case '/':
            // Requirement: / should respond with "Welcome to the Home Page!"
            // I will serve the premium UI as the home page content
            const homePath = path.join(__dirname, 'public', 'index.html');
            fs.readFile(homePath, (err, content) => {
                if (err) {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Welcome to the Home Page!');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
            break;

        case '/about':
            // Requirement: /about should respond with "This is the About Page."
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the About Page.');
            break;

        case '/contact':
            // Requirement: /contact should respond with "This is the Contact Page."
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the Contact Page.');
            break;

        default:
            // 404 Fallback
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404: Resource Not Found');
            break;
    }
});

server.listen(PORT, () => {
    console.log(`\n🚦 Task 25 Route Orchestrator running at http://localhost:${PORT}`);
    console.log(`Active Routes: /, /about, /contact\n`);
});
