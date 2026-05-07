const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4006;

// Task 36: Setting Custom Headers
const server = http.createServer((req, res) => {
    console.log(`📡 [INCOMING] Request for: ${req.url}`);

    // Requirement: Set custom HTTP headers in your responses
    const customHeaders = {
        'Content-Type': 'text/html',
        'X-Powered-By': 'Nexus-Core-Engine',
        'X-Assignment-Module': '36',
        'X-Server-Timestamp': new Date().toISOString(),
        'Access-Control-Allow-Origin': '*'
    };

    // Apply headers to the response
    Object.entries(customHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
    });

    // Requirement: Log the headers sent in the response to the console
    console.log(`\n📤 [HEADER_DISPATCH] Metadata sent to client:`);
    console.table(customHeaders);
    console.log(`-------------------------------------------\n`);

    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200);
                res.end(content);
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Custom headers have been dispatched. Check the Network tab.');
    }
});

server.listen(PORT, () => {
    console.log(`\n🏷️ Task 36 Header Architect online at http://localhost:${PORT}`);
    console.log(`All responses now include custom X-Headers.\n`);
});
