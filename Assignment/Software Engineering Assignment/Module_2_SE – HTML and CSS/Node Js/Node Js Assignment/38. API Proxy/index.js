const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const PORT = 5007;

app.use(express.static(path.join(__dirname, 'public')));

// Requirement: Create a route that proxies requests to an external API
// Requirement: Use the http-proxy-middleware package to handle the proxying
const apiProxy = createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove /api prefix when sending to the target
    },
    // Requirement: Log the requests to the console
    onProxyReq: (proxyReq, req, res) => {
        console.log(`\n📡 [PROXY_RELAY] IN: ${req.method} ${req.url} ➔ OUT: ${proxyReq.host}${proxyReq.path}`);
    },
    // Requirement: Log the responses to the console
    onProxyRes: (proxyRes, req, res) => {
        console.log(`✅ [PROXY_RESPONSE] Status: ${proxyRes.statusCode} | Source: ${req.url}`);
    },
    onError: (err, req, res) => {
        console.error(`❌ [PROXY_ERROR] Connection to target failed: ${err.message}`);
        res.status(500).send('Proxy link severed.');
    }
});

// Mount the proxy middleware
app.use('/api', apiProxy);

app.listen(PORT, () => {
    console.log(`\n🌉 Task 38 Proxy Gateway online at http://localhost:${PORT}`);
    console.log(`Local Tunnel: /api ➔ https://jsonplaceholder.typicode.com\n`);
});
