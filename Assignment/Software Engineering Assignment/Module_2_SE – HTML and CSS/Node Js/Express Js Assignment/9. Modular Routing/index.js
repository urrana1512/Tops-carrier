const express = require('express');
const path = require('path');
// Requirement: Import the router into your main Express app
const userRouter = require('./routes/userRoutes');

const app = express();
const PORT = 3008;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Requirement: Use the router in your main Express app
// Mount the user router at /api/users
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`\n🧩 Task 9 Modular Routing active at http://localhost:${PORT}`);
    console.log(`User Router mounted at: /api/users\n`);
});
