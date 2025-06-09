const express = require('express');
const app = express();
const port = 3002;
const mongoose = require('mongoose');


const bookRoutes = require('./routes/bookRoute');
const borrowRoutes = require('./routes/borrowRoute');
const studentRoutes = require('./routes/studentRoute');


app.use(express.json());  


app.use('/api/students', studentRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes); 

mongoose.connect('mongodb://localhost:27017/libappDB')
    .then(() => {
        console.log("Database connected!");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


