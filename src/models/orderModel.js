const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem',
      required: true,
    },
  ],

  shippingAddress: {
    type: String,
    required: true,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
