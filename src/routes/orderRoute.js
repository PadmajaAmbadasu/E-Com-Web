const express = require("express");
const router = express.Router();
const addToCart = require("../controllers/cartController");


router.post('/', addToCart.saveToCart);

router.get("/", addToCart.getItemsCart);


module.exports = router;

