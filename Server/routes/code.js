const express = require("express");

const router = express.Router();

//importing the controllers
const {
  insertCodeSubmission,
  getCodeSubmission,
} = require("../controller/codeSubmission");

//Routes
router.post("/submitCode", insertCodeSubmission);
router.get("/getCodeSubmission", getCodeSubmission);

//exporting the router
module.exports = router;
