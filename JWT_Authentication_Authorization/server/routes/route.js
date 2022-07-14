const express = require("express");
const { signupFun, loginFun } = require("../controller/controller");

const router = express.Router();

router.post("/signup", signupFun);
router.post("/login", loginFun);

module.exports = router;