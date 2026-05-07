const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3017;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n🛰️ Task 18 API Command Center running at http://localhost:${PORT}\n`);
});
