const express = require("express");
const router = express.Router();
const user = require("../controllers/userControllers");


router.post("/register", user.register);

router.get("/", user.register);

router.post("/login", user.login);



module.exports = router;