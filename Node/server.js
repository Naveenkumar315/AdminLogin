const express = require("express");
const cors = require("cors");
const db = require("./DB/db");
const ApiRoutes = require("./Routes/router");
require("dotenv").config(); // Load environment variables from .env file

// Create an Express application
const app = express();

// Configure CORS middleware
app.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"], // Include "Authorization" header - need to include whatever we are setting the headers in frontend
    exposedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    preflightContinue: true,
  })
);

// Parse incoming JSON requests
app.use(express.json());

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Use the API routes //api - end point
app.use("/api", ApiRoutes()); // Mount the API routes under /api

// Start the server and listen on a port
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
