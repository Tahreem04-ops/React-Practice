// Entry point for the Quote Generator backend
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quoteRoutes = require("./routes/quotes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Quote Generator API is running" });
});

// Routes
app.use("/api", quoteRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
