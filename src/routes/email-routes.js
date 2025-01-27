const express = require("express");
const { sendEmailHandler } = require("../controllers/email-controller.js");

const router = express.Router();

router.post("/send-email", sendEmailHandler);

module.exports = router;
