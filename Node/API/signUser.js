const express = require("express");
const router = express.Router();
const db = require("../DB/db");

router.post("/", async (req, res) => {
  let userCollection = db.collection("user");
  await userCollection
    .insertOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then((result) => {
      res.status(201).send({ Message: "user created successfully", res: 1 });
    })
    .catch((err) => {
      res.status(404).send({ Message: "user created failed", res: 0 });
    });
});

module.exports = router;
