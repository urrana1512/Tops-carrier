const express = require('express');
const path = require('path');
const app = express();
const PORT = 3005;

// Requirement: Process form data on the server side
// Middleware to parse URL-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Task 6: Handling Form Data with POST Requests
// Requirement: Create a POST route /submit that processes the form data
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    console.log(`\n📝 [INTAKE_RECEIVED] New record committed to memory.`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`-------------------------------------------\n`);

    // Requirement: Respond with a success message
    res.send(`
        <div style="font-family: 'Outfit', sans-serif; background: #050505; color: #fff; height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center;">
            <div style="background: rgba(255,255,255,0.05); padding: 3rem; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); max-width: 400px;">
                <h1 style="color: #10b981; margin-bottom: 1rem;">Submission Success!</h1>
                <p style="color: #94a3b8; margin-bottom: 2rem;">Identity captured and successfully processed by the Express engine.</p>
                <div style="text-align: left; background: #000; padding: 1.5rem; border-radius: 15px; font-family: monospace;">
                    <div style="color: #10b981;">> NAME: ${name}</div>
                    <div style="color: #10b981;">> EMAIL: ${email}</div>
                </div>
                <br>
                <a href="/" style="color: #64748b; text-decoration: none; font-size: 0.8rem; letter-spacing: 1px;">BACK_TO_INTAKE</a>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`\n📋 Task 6 Identity Intake active at http://localhost:${PORT}`);
    console.log(`Standing by for POST submissions at /submit\n`);
});
