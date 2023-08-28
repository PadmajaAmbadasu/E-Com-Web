const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  console.log(req.body);
  const data = new productModel({
    name: req.body.name,
    cost: req.body.cost,
    warrenty: req.body.warrenty,
    user_id:req.user.id,
  });
  try {
    const createdProduct = await data.save();
    res.status(201).json(createdProduct);
  } catch (error){
    console.log(error)
    res.send("message:error");
  }
};

const getProduct = async (req, res) => {
  const searchProduct = await productModel.find({user_id:req.user.id});
  res.json(searchProduct);
};

const updateProduct = async (req, res) => {
  try {
    const { id, name, cost } = req.body;
    if (!id || !name || !cost) {
      return res
        .status(400)
        .json({ error: "Missing required data in the request body" });
    }
    const updatedItem = await productModel.updateOne(
      { _id: id },
      { $set: { name: name, cost: cost } }
    );
    console.log("Updated product data:", updatedItem);
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating product" });
  }
};



const deleteProduct = async (req, res) => {
  try {
    const id = req.body;
    console.log(id)
    if (!id) {
      return res.status(400).json({ error: "not found" });
    }
    
    const deletedProduct = await productModel.deleteOne();
    console.log("the product deleted is", deletedProduct);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting product" });
  }
};


module.exports = { createProduct, getProduct, deleteProduct, updateProduct };

// const productService = require("../services/productService");

// const express = require("express");

// const productRouter = express.Router();

// productRouter.post("/createProducts", async (req, res) => {
//   try {
//     const { name, cost, description, warrenty } = req.body;

//     const createdProduct = await productService.createProduct(
//       name,
//       cost,
//       description,
//       warrenty
//     );
//     console.log("the new product is", createdProduct);
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     console.log(`${error}`);
//     res.status(500).json({ error: "Internal server error" });
//   }

//   productRouter.get("/getProduct", async (req, res) => {
//     try {
//       const searchProduct = await productService.getProduct();
//       console.log("the product found is", searchProduct);
//       res.status(201).json(searchProduct);
//     } catch (error) {
//       console.log(`${error}`);
//       res.status(500).json({ error: "internal server error" });
//     }

//     productRouter.delete("/deleteProduct",async(req,res)=>{
//       try{
//         const id=req.params
//         const removeProduct=await productService.deleteProduct();
//         console.log(removeProduct)
//         res.status(201).json(removeProduct)
//       }catch(error){
//         console.log(`${error}`)
//         res.status(500).json({error:"internal server error"})
//       }
//     })
//   });
// });
// module.exports = productRouter;
