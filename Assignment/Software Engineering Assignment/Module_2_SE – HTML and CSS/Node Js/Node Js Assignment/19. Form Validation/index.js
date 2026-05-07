const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3018;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n🛡️ Task 19 Secure Registration running at http://localhost:${PORT}\n`);
});
