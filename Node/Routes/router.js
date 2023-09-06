const express = require("express");

// import Api links
const signUser = require("../API/signUser");
const login = require("../API/login");

function ApiRoutes() {
  const router = express.Router();

  router.use("/signUser", signUser);
  router.use("/login", login)

  return router;
}

module.exports = ApiRoutes;
