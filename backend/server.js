require('dotenv').config(); // Memastikan variabel lingkungan diimpor dari file .env

const express = require('express');
const app = express();
const workoutRoutes = require('./routes/workout');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    // Listen request
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & Server is running on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
