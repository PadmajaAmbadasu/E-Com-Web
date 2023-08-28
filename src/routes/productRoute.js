const express = require("express");
const router = express.Router();
const product = require("../controllers/productControllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.post("/create", product.createProduct);

router.get("/", product.getProduct);

router.put("/id:", product.updateProduct);

router.delete("/", product.deleteProduct);

module.exports = router;

// const productModel = require("../models/productModel");

// class productService {
//   static async createProduct(name, cost, description, warrenty) {
//     try {
//       const params = new productModel({
//         name,
//         cost,
//         description,
//         warrenty,
//       });
//       console.log("the product is", params);
//       const createProduct = await params.save();
//       console.log(createProduct);
//       return createProduct;
//     } catch (error) {
//       console.log("the error is", `${error}`);
//     }
//   }

//   static async getProduct() {
//     try {
//       const findProduct = await productModel.find();
//       console.log(findProduct);
//       return findProduct;
//     } catch (error) {
//       console.log("the error is", `${error}`);
//     }
//   }

//   static async deleteProduct(){
//     try{
//       const deletedProduct=await productModel.findById(req.params.id);
//       const data=deletedProduct.deleteOne()
//       console.log("the deleted product is",deletedProduct)
//       console.log("the data is",data)
//       return deletedProduct;
//     }catch(error){
//       console.log("the error is",`${error}`)
//     }
//   }
// }
// module.exports = productService;
