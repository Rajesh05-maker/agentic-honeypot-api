const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/honeypot.controller");

router.post("/honeypot/analyze", auth, (req, res) => {
  console.log("Reached route");
  controller.analyzeMessage(req, res);
});

module.exports = router;
