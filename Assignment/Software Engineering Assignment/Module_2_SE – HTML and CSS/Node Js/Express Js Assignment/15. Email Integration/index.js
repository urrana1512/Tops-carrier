const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = 3014;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Task 15: Sending Emails with Nodemailer
// Requirement: Install and configure Nodemailer
const setupTransporter = async () => {
    // Creating a test account via Ethereal for demonstration
    let testAccount = await nodemailer.createTestAccount();

    return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });
};

// Requirement: Create a route /send-email that sends an email
app.post('/send-email', async (req, res) => {
    const { to, subject, body } = req.body;
    
    console.log(`\n📧 [EMAIL_REQUEST] Dispatching signal to: ${to}`);

    try {
        const transporter = await setupTransporter();

        // Requirement: Customize the email content (subject, body)
        let info = await transporter.sendMail({
            from: '"Express Nexus Sentinel" <sentinel@express.nexus>',
            to: to || "user@example.com",
            subject: subject || "System Status Alert",
            text: body || "The Express server has successfully initialized the communication handshake.",
            html: `<b>${body || "The Express server has successfully initialized the communication handshake."}</b>`,
        });

        // Requirement: Log the result of the sending operation
        console.log(`✅ [EMAIL_DISPATCHED] Message ID: ${info.messageId}`);
        console.log(`🔗 [PREVIEW_LINK] ${nodemailer.getTestMessageUrl(info)}`);

        res.json({
            status: "SUCCESS",
            message: "Email successfully dispatched to the virtual SMTP layer.",
            preview_url: nodemailer.getTestMessageUrl(info),
            meta: { id: info.messageId, recipient: to }
        });
    } catch (err) {
        console.error(`❌ [EMAIL_FAILURE] Transmission failed: ${err.message}`);
        res.status(500).json({ status: "ERROR", message: "SMTP Handshake failed." });
    }
});

app.listen(PORT, () => {
    console.log(`\n📡 Task 15 Signal Dispatcher active at http://localhost:${PORT}`);
    console.log(`Standing by for email dispatch requests at /send-email\n`);
});
