const router = require("express").Router();

const { logInOut } = require("../auth/login");

router.post("/", logInOut);

module.exports = router;
