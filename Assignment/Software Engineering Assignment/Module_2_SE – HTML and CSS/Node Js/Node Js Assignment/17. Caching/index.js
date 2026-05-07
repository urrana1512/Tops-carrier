const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3016;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n⚡ Task 17 Cache Vault running at http://localhost:${PORT}\n`);
});
