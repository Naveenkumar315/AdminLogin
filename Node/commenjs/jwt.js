const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {

  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const token = authorizationHeader;

  try {
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decode.exp < currentTimestamp) {
      return res.status(401).json({ message: "Token expired" });
    }

    // Token is valid, you can proceed.
    // You might want to attach the user information to the request for later use.
    req.user = decode;

    next(); // Don't forget to call next() to move to the next middleware or route handler.
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;
