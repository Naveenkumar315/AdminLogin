// const jwt = require("../commenjs/jwt")
const express = require("express");
const router = express.Router();

// Use jwtMiddleware as a middleware for this route.
router.post("/", (req, res) => {
    try {
        console.log('Hello');
        res.json({msg: 'hello'})
        // You can access the user information from req.user if you attached it in the jwt middleware.
    } catch (error) {
        // Handle errors
    }
});

module.exports = router;
