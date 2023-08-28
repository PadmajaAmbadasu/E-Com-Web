const mongoose = require("mongoose");
const UserModel = new mongoose.Schema({
  
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("users", UserModel);
