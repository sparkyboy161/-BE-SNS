const express = require("express");

const router = express.Router();

const controller = require("../controllers/notification.controller");
const fbAuth = require("../middlewares/fbAuth.middleware");

router.post("/", fbAuth, controller.read);


module.exports = router;
