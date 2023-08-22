const mongoose = require("mongoose");

const categerySchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },

  cname: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: false,
  },

  image: {
    type: String,
    require: false,
  },
});

const Category = mongoose.model("Categery", categerySchema);

module.exports = Category;
