const express = require("express");
const router = express.Router();
const db = require("../DB/db");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    let userColl = db.collection("user");

    const email_Id = req.body.email;
    const password = req.body.password;

    let userData = await userColl.findOne({ email: email_Id });
    if (!userData) {
      res.status(401).send({ Message: "User Id Not Exist" });
    }

    let pass = await bcrypt.compare(password, userData.password);
    if (!pass) {
      res.status(401).send({ Message: "Password is Incorrect" });
    }

    if (userData && pass) {
      const jwt_token = jwt.sign(
        { userId: email_Id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "24h",
        }
      );

      let loginTime = new Date().getTime();
      let logoutTime = null;
      await userColl.updateOne(
        { email: email_Id },
        { $set: { loginTime: loginTime, logoutTime: logoutTime } }
      );

      res.status(200).send({
        message: "Login Successful",
        email: email_Id,
        token: jwt_token,
        username: userData.username,
        loginTime: loginTime,
        logoutTime: logoutTime,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
