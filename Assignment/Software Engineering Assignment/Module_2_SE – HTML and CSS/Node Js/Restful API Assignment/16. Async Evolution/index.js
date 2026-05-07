const express = require('express');
const path = require('path');
const app = express();
const PORT = 4015;

app.use(express.static(path.join(__dirname, 'public')));

// Mock Asynchronous Database Fetch
const mockFetch = (id, callback) => {
    setTimeout(() => {
        if (id > 0) callback(null, { id, data: `Resource_${id}` });
        else callback(new Error("Invalid ID detected."));
    }, 500);
};

// --- TASK 16: ASYNC EVOLUTION ---

// 1. Callback-Based Implementation (Legacy)
const fetchCallbackStyle = (id, res) => {
    console.log("⏳ [ASYNC_EVOLVE] Stage 1: Callback Handshake");
    mockFetch(id, (err, data) => {
        if (err) return res.status(500).json({ status: "FAIL", message: err.message });
        res.json({ status: "SUCCESS", pattern: "CALLBACK", data });
    });
};

// 2. Promise-Based Implementation (Refactored)
const fetchPromiseStyle = (id) => {
    console.log("🔗 [ASYNC_EVOLVE] Stage 2: Promise Handshake");
    return new Promise((resolve, reject) => {
        mockFetch(id, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// 3. Async/Await Implementation (Modern)
const fetchAsyncAwaitStyle = async (id, res) => {
    console.log("⚡ [ASYNC_EVOLVE] Stage 3: Async/Await Handshake");
    try {
        const data = await fetchPromiseStyle(id);
        res.json({ status: "SUCCESS", pattern: "ASYNC_AWAIT", data });
    } catch (err) {
        res.status(500).json({ status: "FAIL", message: err.message });
    }
};

// --- ENDPOINTS ---

app.get('/api/callback/:id', (req, res) => {
    fetchCallbackStyle(req.params.id, res);
});

app.get('/api/promise/:id', (req, res) => {
    fetchPromiseStyle(req.params.id)
        .then(data => res.json({ status: "SUCCESS", pattern: "PROMISE", data }))
        .catch(err => res.status(500).json({ status: "FAIL", message: err.message }));
});

app.get('/api/modern/:id', (req, res) => {
    fetchAsyncAwaitStyle(req.params.id, res);
});

app.listen(PORT, () => {
    console.log(`\n⏳ Task 16 Async Evolution active at http://localhost:${PORT}`);
    console.log(`Patterns: /api/callback | /api/promise | /api/modern\n`);
});
