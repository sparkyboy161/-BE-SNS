const express = require("express");

const router = express.Router();

const controller = require("../controllers/user.controller");
const fbAuth = require("../middlewares/fbAuth.middleware");

router.get("/", fbAuth, controller.index);
router.post("/image", fbAuth, controller.uploadImage);
router.post("/", fbAuth, controller.update);
router.get("/:handle", fbAuth, controller.view);

module.exports = router;
