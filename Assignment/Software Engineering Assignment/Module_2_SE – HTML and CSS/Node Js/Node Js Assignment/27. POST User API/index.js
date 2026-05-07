const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Requirement: Use the body-parser middleware to parse incoming JSON data
// Note: express.json() is the modern built-in version of body-parser
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Task 27: Handling HTTP POST Requests
// Requirement: Set up a POST route (/api/users) to accept user data
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    console.log(`\n📥 [POST_RECEIVED] Incoming registration attempt.`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`--------------------------------------------\n`);

    // Requirement: Respond with a success message and the received user data in JSON format
    if (name && email) {
        res.status(201).json({
            status: "SUCCESS",
            message: "User identity committed to the temporary buffer.",
            receivedData: {
                name: name,
                email: email,
                timestamp: new Date().toISOString()
            }
        });
    } else {
        res.status(400).json({
            status: "REJECTED",
            message: "Payload missing required 'name' or 'email' fields."
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n📬 Task 27 Registration Portal running at http://localhost:${PORT}`);
    console.log(`Standing by for user data submissions...\n`);
});
