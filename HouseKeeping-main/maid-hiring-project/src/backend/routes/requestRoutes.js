const express = require("express");

const router = express.Router();

router.get("/accepted", (req, res) => {

  res.json([
    {
      _id: 1,
      clientName: "Rahul Sharma",
      work: "Cook",
      status: "Accepted",
      mobile: "9876543210",
      address: "Mumbai",
    },

    {
      _id: 2,
      clientName: "Priya Singh",
      work: "Babysitter",
      status: "Accepted",
      mobile: "9123456780",
      address: "Delhi",
    },
  ]);
});

module.exports = router;