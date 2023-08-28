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

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true,
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
productSchema.pre('findOne', function (next) {
  this.populate(category);
  next();
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;


