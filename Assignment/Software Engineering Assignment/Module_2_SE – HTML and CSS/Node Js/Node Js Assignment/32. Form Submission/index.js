const express = require('express');
const path = require('path');
const app = express();
const PORT = 5003;

// Requirement: Handle form submission on the server side
// Middleware to parse application/x-www-form-urlencoded (traditional form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Task 32: Handling Form Submission
// Requirement: Use the POST method to submit the form data to /submit
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    console.log(`\n📝 [FORM_SUBMISSION] New intake record received.`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`-------------------------------------------\n`);

    // Requirement: Respond with a success message including the submitted data
    res.send(`
        <div style="font-family: 'Outfit', sans-serif; background: #050505; color: #fff; height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center;">
            <div style="background: rgba(255,255,255,0.05); padding: 3rem; border-radius: 30px; border: 1px solid rgba(255,255,255,0.1); max-width: 400px;">
                <h1 style="color: #22c55e; margin-bottom: 1rem;">Submission Success!</h1>
                <p style="color: #94a3b8; margin-bottom: 2rem;">Identity captured and committed to the server logs.</p>
                <div style="text-align: left; background: #000; padding: 1.5rem; border-radius: 15px; font-family: monospace;">
                    <div style="color: #22c55e;">> NAME: ${name}</div>
                    <div style="color: #22c55e;">> EMAIL: ${email}</div>
                </div>
                <br>
                <a href="/" style="color: #64748b; text-decoration: none; font-size: 0.8rem; letter-spacing: 1px;">RETURN_TO_PORTAL</a>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`\n📋 Task 32 Form Intake Portal active at http://localhost:${PORT}`);
    console.log(`Awaiting traditional form submissions at /submit\n`);
});
