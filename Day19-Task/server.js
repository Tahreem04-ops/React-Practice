// Day 19 - Example Express server showing authMiddleware in action
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(express.json());

// --- Fake login route just to generate a token for testing ---
app.post("/api/login", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // NOTE: in real app, verify user + password from DB first
  const token = jwt.sign({ id: 1, email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// --- Protected route ---
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
