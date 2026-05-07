const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// Requirement: Use the dotenv package to load environment variables from a .env file
require('dotenv').config();

const app = express();
// Requirement: Access the environment variables in your code
const PORT = process.env.PORT || 3012;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static(path.join(__dirname, 'public')));

console.log(`\n📦 [ENV_LOADER] Project Context: ${process.env.PROJECT_CODE}`);
console.log(`🌍 [ENV_LOADER] Current Mode: ${process.env.ENVIRONMENT}`);

// Requirement: Connect to the database using these variables
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log(`\n🔋 [DATABASE_CONNECTED] Linked to Vault: ${MONGODB_URI}`))
        .catch(err => console.error(`\n❌ [DATABASE_ERROR] Link failure: ${err.message}`));
} else {
    console.warn("\n⚠️ [CONFIG_WARNING] MONGODB_URI not found in environment registry.");
}

app.get('/api/config', (req, res) => {
    // We send sanitized environment info (not the secret key!)
    res.json({
        status: "SUCCESS",
        environment: process.env.ENVIRONMENT,
        project: process.env.PROJECT_CODE,
        database_link: MONGODB_URI ? "ESTABLISHED" : "MISSING",
        message: "Configuration successfully injected from .env layer."
    });
});

app.listen(PORT, () => {
    console.log(`\n📡 Task 13 Variable Sentinel live at http://localhost:${PORT}`);
    console.log(`System is running with dynamic configuration variables.\n`);
});
