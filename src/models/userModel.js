const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role:{
    type:String,
    enum:['user','admin'],
    default:'User',
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
