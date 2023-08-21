const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

// Create a new order
const post = async (req, res) => {
  try {
    const { products, totalAmount, customerName, customerEmail } = req.body;
    const newOrder = new Order({products,totalAmount,customerName,customerEmail,});
    await newOrder.save();
    res.json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Get all orders
const get = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {get, post};
