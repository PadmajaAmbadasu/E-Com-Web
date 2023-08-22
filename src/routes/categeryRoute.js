const express = require("express");
const router = express.Router();
const categery= require('../controllers/categeryController')

router.post("/", categery.create)


module.exports = router;