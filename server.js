const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Set Mongoose strictQuery option
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Create Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // Add this line to parse JSON payloads
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// API routes
app.use("/api/v1/auth", authRoutes);

// Custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgMagenta.white);
});
