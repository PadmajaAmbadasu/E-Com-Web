const Product = require("../models/productModel");
const AddToCart = require("../models/CartModel");

// Add a product to the cart
const saveToCart = async (req, res) => {

  // console.log("before checking the product")
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // console.log("after checking the product")
    const newCartItem = new AddToCart({
      product: productId,
      quantity: quantity,
    });

    const savedCartItem = await newCartItem.save();
    res.status(201).json(savedCartItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding product to cart", error: error.message });
  }
};



// Get items in the cart
const getItemsCart= async (req, res) => {
  try {
    const cartItems = await AddToCart.find().populate('product');
    res.status(200).json(cartItems);
  } 
  catch (error) {
    res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
  }
};



module.exports = { saveToCart, getItemsCart };
