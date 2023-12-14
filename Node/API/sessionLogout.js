const express = require("express");
const router = express.Router();
const db = require("../DB/db");

router.post("/", (req, res) => {
  try {
    let json = req.body;
    let loginTime = json.loginTime;
    let userColl = db.collection("user");

    userColl
      .aggregate([
        {
          $match: {
            email: json.email,
            loginTime: { $eq: parseInt(loginTime) },
          },
        },
      ])
      .toArray()
      .then((result) => {
        if(result.length != 0){
            res.json({mesg: 'hello'})
        }else{
            res.send('1')
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  } catch (error) {
    console.log(`err: ${error}`);
  }
});

module.exports = router;
