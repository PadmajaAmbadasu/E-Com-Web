const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: false,
  },

  rating: {
    type: String,
    require: false,
  },

  warrenty: {
    type: String,
    require: true,
  },

});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;


