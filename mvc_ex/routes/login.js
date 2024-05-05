const express = require("express");
const controller = require("../controller/login");
const router = express.Router();

router.get("/", controller.login);
router.post("/user", controller.login);

module.exports = router;
