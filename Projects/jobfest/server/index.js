/********************************************************************
 * index.js
 * Main entry point of JobFest backend server
 ********************************************************************/

// Import required packages
const express = require("express");       // Express framework
const mongoose = require("mongoose");    // MongoDB connection
const cors = require("cors");            // Allow cross-origin requests
require("dotenv").config();              // Load environment variables

// Create express app
const app = express();

// Middleware
app.use(cors());              // Allow frontend requests
app.use(express.json());      // Parse JSON data from frontend

/********************************************************************
 * MongoDB Connection
 ********************************************************************/
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});

/********************************************************************
 * Test Route
 * Just to check if server is running
 ********************************************************************/
app.get("/", (req, res) => {
    res.send("JobFest Backend Running Successfully 🚀");
});

/********************************************************************
 * Start Server
 ********************************************************************/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
