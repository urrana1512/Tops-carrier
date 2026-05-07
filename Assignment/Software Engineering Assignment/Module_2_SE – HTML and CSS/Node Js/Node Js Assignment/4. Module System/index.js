const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;

// IMPORTING our custom module
const math = require('./mathUtils');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API route that uses the imported module functions
app.post('/api/calculate', (req, res) => {
    const { a, b, operation } = req.body;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    let result;
    switch (operation) {
        case 'add': result = math.add(numA, numB); break;
        case 'subtract': result = math.subtract(numA, numB); break;
        case 'multiply': result = math.multiply(numA, numB); break;
        case 'divide': result = math.divide(numA, numB); break;
        default: result = "Invalid Operation";
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`\n📐 Task 4 Math Engine running at http://localhost:${PORT}\n`);
});
