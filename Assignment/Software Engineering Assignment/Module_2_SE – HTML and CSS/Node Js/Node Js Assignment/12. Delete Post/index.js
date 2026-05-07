const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3011;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n🗑️ Task 12 Post Management running at http://localhost:${PORT}\n`);
});
