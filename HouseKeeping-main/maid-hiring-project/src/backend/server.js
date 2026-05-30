require("dns").setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/.env" });

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/maids", require("./routes/maidRoutes"));

const requestRoutes = require("./routes/requestRoutes.js");

app.use("/api/request", requestRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});