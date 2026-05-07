const express = require('express');
const path = require('path');
const app = express();
const PORT = 3017;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (In-Memory Array)
let todos = [
    { id: 1, task: "Initialize Express Nexus", completed: true },
    { id: 2, task: "Secure API Endpoints", completed: false }
];

// Requirement: GET /api/todos - retrieve the list of todos
app.get('/api/todos', (req, res) => {
    console.log("📋 [TODO_RETRIEVAL] Dispatching task registry.");
    res.json({ status: "SUCCESS", data: todos });
});

// Requirement: POST /api/todos - create a new todo
app.post('/api/todos', (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).json({ status: "ERROR", message: "Task description missing." });

    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        task,
        completed: false
    };

    todos.push(newTodo);
    console.log(`➕ [TODO_CREATE] New task committed: "${task}"`);
    res.status(201).json({ status: "CREATED", data: newTodo });
});

// Requirement: PUT /api/todos/:id - update a todo by ID
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { task, completed } = req.body;
    
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ status: "ERROR", message: "ID not found." });

    todos[index] = {
        ...todos[index],
        task: task !== undefined ? task : todos[index].task,
        completed: completed !== undefined ? completed : todos[index].completed
    };

    console.log(`📝 [TODO_UPDATE] Task ID ${id} modified.`);
    res.json({ status: "UPDATED", data: todos[index] });
});

// Requirement: DELETE /api/todos/:id - delete a todo by ID
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = todos.length;
    todos = todos.filter(t => t.id !== id);

    if (todos.length < initialLength) {
        console.log(`🗑️ [TODO_DELETE] Task ID ${id} decommissioned.`);
        res.json({ status: "DELETED", id_removed: id });
    } else {
        res.status(404).json({ status: "ERROR", message: "ID not found." });
    }
});

app.listen(PORT, () => {
    console.log(`\n✅ Task 18 Task Nexus active at http://localhost:${PORT}`);
    console.log(`Full CRUD operational: GET, POST, PUT, DELETE\n`);
});
