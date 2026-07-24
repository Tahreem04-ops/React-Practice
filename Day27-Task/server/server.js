import express from "express";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Day 27 - Winston Logging");
});

// Test Route
app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  next(error);
});

// Global Error Handler
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});