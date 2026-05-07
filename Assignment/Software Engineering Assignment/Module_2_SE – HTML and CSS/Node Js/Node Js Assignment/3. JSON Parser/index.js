const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

/**
 * Core Function: Demonstrates Try...Catch for JSON Parsing
 */
function safeJsonParse(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        return { success: true, data: result };
    } catch (error) {
        return { 
            success: false, 
            error: error.message,
            hint: "Check for missing quotes, trailing commas, or curly braces."
        };
    }
}

// API Route to test the parsing function
app.post('/api/parse', (req, res) => {
    const { jsonString } = req.body;
    const result = safeJsonParse(jsonString);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`\n✅ Task 3 Server running at http://localhost:${PORT}\n`);
});
