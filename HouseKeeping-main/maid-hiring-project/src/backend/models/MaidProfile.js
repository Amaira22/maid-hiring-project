const mongoose = require("mongoose");

const maidProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: String,
    age: Number,
    gender: String,
    experience: String,
    serviceType: String,
    location: String,
    phone: String,
    availability: String,
    salaryExpectation: String,
    languages: String,
    profilePhoto: String,
    rating: {
      type: Number,
      default: 0,
    },
    approved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MaidProfile", maidProfileSchema);