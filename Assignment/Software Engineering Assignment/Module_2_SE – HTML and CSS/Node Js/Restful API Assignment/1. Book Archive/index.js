const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (Book Registry)
let books = [
    { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt", status: "Available" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", status: "Checked Out" }
];

// RESTful ENDPOINTS

// 1. READ (ALL) - GET /api/books
app.get('/api/books', (req, res) => {
    console.log("📚 [REST_GET] Synchronizing master library registry.");
    res.json({ status: "SUCCESS", count: books.length, data: books });
});

// 2. READ (SINGLE) - GET /api/books/:id
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ status: "ERROR", message: "Record not found in archive." });
    res.json({ status: "SUCCESS", data: book });
});

// 3. CREATE - POST /api/books
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ status: "ERROR", message: "Metadata incomplete. Title and Author required." });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        status: "Available"
    };

    books.push(newBook);
    console.log(`➕ [REST_POST] New record ingested: "${title}" by ${author}`);
    res.status(201).json({ status: "CREATED", data: newBook });
});

// 4. UPDATE - PUT /api/books/:id
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ status: "ERROR", message: "Record not found." });

    const { title, author, status } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.status = status || book.status;

    console.log(`📝 [REST_PUT] Record ID ${req.params.id} synchronized.`);
    res.json({ status: "UPDATED", data: book });
});

// 5. DELETE - DELETE /api/books/:id
app.delete('/api/books/:id', (req, res) => {
    const initialLength = books.length;
    books = books.filter(b => b.id !== parseInt(req.params.id));

    if (books.length < initialLength) {
        console.log(`🗑️ [REST_DELETE] Record ID ${req.params.id} purged from archive.`);
        res.json({ status: "DELETED", id_purged: req.params.id });
    } else {
        res.status(404).json({ status: "ERROR", message: "Record not found." });
    }
});

app.listen(PORT, () => {
    console.log(`\n📖 Task 1 Book Archive active at http://localhost:${PORT}`);
    console.log(`RESTful Service: Operational (CRUD Handshake Ready)\n`);
});
