const express = require("express");
const router = express.Router();
const category= require('../controllers/categeryController')

router.post("/", category.createCategery)


module.exports = router;