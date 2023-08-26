const express = require("express");

// import Api links
const getdata = require("../API/getData");

function ApiRoutes() {
  const router = express.Router();

  router.use("/getdata", getdata);

  return router;
}

module.exports = ApiRoutes;
