const mongoose = require('mongoose');

// Requirement: Create a User model with fields for name and email
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory for identity commitment."]
    },
    email: {
        type: String,
        required: [true, "Network alias (Email) is mandatory."],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
