const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5200
const userRoutes = require('./Routes/UserRoutes');
const taskRoutes = require('./Routes/TaskRoutes');
const cors = require('cors');
const db = require('./db/connection');
const errorHandler = require('./Middlewares/errorHandler');

// Use CORS middleware
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use user routes
app.use('/api/auth/', userRoutes);
app.use('/api/tasks/', taskRoutes);


app.use(errorHandler)
// Connect to the database
db()
  .then(() => {
    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log('Server is running at http://localhost:' + PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
