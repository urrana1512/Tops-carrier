const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch data from JSONPlaceholder
app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`\n🌐 Task 5 API Fetch running at http://localhost:${PORT}\n`);
});
