const express = require("express");
const validateUser = require("../middleware/asx");

const router = express.Router();

router.post("/register", validateUser, (req, res) => {

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user: req.body
  });

});

module.exports = router;