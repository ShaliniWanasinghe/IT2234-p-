const express = require('express');
const app = express();
const port = 3001;

// Corrected import to match the exports from student.js
const { students, getStudentByRegNo, getStudentsByGender } = require('./student.js');

// Middleware to parse JSON requests
app.use(express.json());

// Get all students
app.get('/stu', (req, res) => {
    res.json(students);
});

// Get student by regno
app.get('/stu/:id', (req, res) => {
    const id = req.params.id;
    const result = getStudentByRegNo(id); // Using the imported function
    
    if(result) {
        res.json(result);
    } else {
        res.status(404).json({error: "Student not found"});
    }
});

// Filter students by gender
app.get('/stu/gender/:gen', (req, res) => {
    const gender = req.params.gen;
    const result = getStudentsByGender(gender); // Using the imported function
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});