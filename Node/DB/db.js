const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const mongodbUri = process.env.MONGODB_URI;

// Connect to the MongoDB database
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

module.exports = db;
