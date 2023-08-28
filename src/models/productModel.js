const mongoose = require("mongoose");
const userModel = require("./userModel");
const productModel = new mongoose.Schema({
  
  user_id:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:userModel
  },
  name: {
    type: String,
    required: false,
  },
  cost: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  warrenty: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("products", productModel);
