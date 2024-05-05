const express = require("express");
const controller = require("../controller/login");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.signup);
router.get("/login", controller.login);

router.post("/signupwrite", controller.signupReg);
router.post("/loginenter", controller.loginCon);
module.exports = router;
