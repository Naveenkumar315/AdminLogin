const express = require("express");

// import Api links
const signUser = require("../API/signUser");

function ApiRoutes() {
  const router = express.Router();

  router.use("/signUser", signUser);

  return router;
}

module.exports = ApiRoutes;
