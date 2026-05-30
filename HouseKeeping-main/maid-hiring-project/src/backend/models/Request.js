const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  clientName: String,
  mobile: String,
  address: String,
  work: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model(
  "Request",
  requestSchema
);