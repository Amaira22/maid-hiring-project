const express = require("express");
const MaidProfile = require("../models/MaidProfile");

const router = express.Router();

router.get("/", async (req, res) => {
  const maids = await MaidProfile.find();
  res.json(maids);
});

router.get("/:id", async (req, res) => {
  const maid = await MaidProfile.findById(req.params.id);
  res.json(maid);
});

router.post("/profile", async (req, res) => {
  try {
    const profile = new MaidProfile(req.body);
    await profile.save();

    res.json({
      message: "Profile Created",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;