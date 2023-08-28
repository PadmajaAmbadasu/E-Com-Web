const express = require("express");
const router = express.Router();
const product = require("../controllers/productController");

router.post("/", product.post)

router.get("/", product.get); 
router.get("/:id", product.get); 


router.put("/:id", product.put);

router.delete("/:id", product.deleteVal);



module.exports = router;
