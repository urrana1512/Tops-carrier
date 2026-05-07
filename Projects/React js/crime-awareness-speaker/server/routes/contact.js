const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Submit Inquiry
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newInquiry = new Inquiry({ name, email, message });
        await newInquiry.save();
        res.json({ msg: 'Inquiry sent successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get All Inquiries (Admin only - ideally protect this route)
router.get('/', async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
