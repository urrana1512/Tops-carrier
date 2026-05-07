const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`\n✨ Task 7 Content Display running at http://localhost:${PORT}\n`);
});
