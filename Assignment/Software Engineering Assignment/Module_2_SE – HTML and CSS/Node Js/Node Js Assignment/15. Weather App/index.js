const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3014;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n☁️ Task 15 Zen Weather App running at http://localhost:${PORT}\n`);
});
