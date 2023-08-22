const mongoose = require("mongoose");
const product = require("./productModel");

const orderItemSchema = new mongoose.Schema({
  quantity: {
    type: String,
    require: true,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      require: false,
    },
  ],
});
orderItemSchema.pre('findOne', function (next) {
  this.populate(product);
  next();
});
const OrderItem = mongoose.model("OrderItem", orderItemSchema);

module.exports = OrderItem;