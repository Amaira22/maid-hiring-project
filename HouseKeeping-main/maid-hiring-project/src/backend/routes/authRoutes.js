const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
    });
  }
});

module.exports = router;