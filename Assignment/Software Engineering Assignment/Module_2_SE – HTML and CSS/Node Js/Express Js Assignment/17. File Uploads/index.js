const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3016;

app.use(express.static(path.join(__dirname, 'public')));

// Task 17: Implementing File Uploads
// Requirement: Use the multer middleware to handle file uploads
// Configure Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        // Unique filename generation
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Requirement: Create a POST route to handle the file upload
// Requirement: Respond with the uploaded file's details
app.post('/api/upload', upload.single('nexusFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ status: "ERROR", message: "No payload detected." });
    }

    console.log(`\n📥 [ASSET_INTAKE] File captured: ${req.file.originalname}`);
    console.log(`📂 [ASSET_INTAKE] Committed to: ${req.file.path}`);

    res.json({
        status: "SUCCESS",
        message: "Asset successfully ingested and committed to the Nexus filesystem.",
        file_details: {
            original_name: req.file.originalname,
            storage_name: req.file.filename,
            mime_type: req.file.mimetype,
            size_bytes: req.file.size,
            internal_path: req.file.path
        }
    });
});

app.listen(PORT, () => {
    console.log(`\n📦 Task 17 Asset Intake active at http://localhost:${PORT}`);
    console.log(`Upload registry mapped to: ${path.join(__dirname, 'uploads')}\n`);
});
