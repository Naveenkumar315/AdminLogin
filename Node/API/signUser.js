const express = require("express");
const router = express.Router();
const db = require("../DB/db");
const { hash } = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    let userCollection = db.collection("user");

    // 1. check if user already exists
    const user = await userCollection.findOne({ email: req.body.email });

    // if user exists already, return error
    if (user) {
      res.send({ Message: "User already exists! Try logging in", res: 2 });
      return;
    }

    // hashing the password
    const passwordHash = await hash(req.body.password, 10);

    // 2. if user doesn't exist, create a new user
    await userCollection
      .insertOne({
        username: req.body.username,
        email: req.body.email,
        password: passwordHash,
      })
      .then((result) => {
        res.status(201).send({ Message: "user created successfully", res: 1 });
      })
      .catch((err) => {
        res.status(404).send({ Message: "user created failed", res: 0 });
      });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
