const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cardRoutes = require("./routes/cardRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

const cors = require("cors");
app.use(cors());

// Routes
app.use("/api/v1", cardRoutes);

// Simple endpoint to check if the server is running
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
