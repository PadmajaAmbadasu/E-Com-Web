const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.post("/", product.post);

router.get("/", product.get); 

router.put("/:id", product.put);

router.delete("/:id", product.deleteVal);



module.exports = router;
