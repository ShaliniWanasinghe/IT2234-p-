const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const bookRoutes = require('./routes/bookRoute');
const borrowRoutes = require('./routes/borrowRoute');
const studentRoutes = require('./routes/studentRoute');

const app = express();
const port = 3002;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);
app.use('/api/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/ProjectDB')
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Database connection error:", error));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
