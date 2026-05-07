const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4004;

// MIME Type Mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
};

// Task 28: Serving Static Files
const server = http.createServer((req, res) => {
    console.log(`📂 [REQUEST] Client requesting: ${req.url}`);

    // Resolve file path
    let urlPath = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(__dirname, 'public', urlPath);

    // Get the file extension
    const extname = path.extname(filePath).toLowerCase();
    
    // Requirement: Ensure that the correct content type is set for each file type
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Requirement: Use the fs module to serve the files
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`❌ [404] File Not Found: ${filePath}`);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: Resource Not Found');
            } else {
                console.error(`❌ [500] Server Error: ${err.code}`);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500: Internal Server Error');
            }
        } else {
            console.log(`✅ [SERVE] ${urlPath} as ${contentType}`);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n📦 Task 28 Static Asset Server running at http://localhost:${PORT}`);
    console.log(`Mapping active for: .html, .css, .js\n`);
});
