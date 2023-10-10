const express = require("express");

// import Api links
const signUser = require("../API/signUser");
const login = require("../API/login");
const getuserlist = require("../API/getuserlist")
const verifyJWT = require('../commenjs/jwt')

function ApiRoutes() {
  const router = express.Router();
 // Routes that don't require authentication
  router.use("/signUser", signUser);
  router.use("/login", login)

   // Route that requires authentication (getuserlist)
  router.use("/getuserlist", verifyJWT, getuserlist)

  return router;
}

module.exports = ApiRoutes;
