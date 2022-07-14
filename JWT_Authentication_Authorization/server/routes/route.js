const express = require("express");
const { signupFun, loginFun, veryfyToken, getUser } = require("../controller/controller");

const router = express.Router();

router.post("/signup", signupFun);
router.post("/login", loginFun);
router.get("/user", veryfyToken, getUser);

module.exports = router;