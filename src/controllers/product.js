const productSchema = require("../models/productModel");

const post = async (req, res) => {
  const data = new productSchema({
    name: req.body.name,
    cost:req.body.cost,
    warrenty:req.body.warrenty
  });
  try {
    const data1 = await data.save();
    res.json(data1);
  } catch {
    res.send("message:error");
  }
};

const deleteVal = async (req, res) => {
  try {
    const data = await productSchema.findById(req.params.id);
    const data1 = data.deleteOne();
    res.json(data1);
  } catch (err) {
    res.send(err);
  }
};

const get = async (req, res) => {
  const data = await productSchema.find();
  res.json(data);
};

const put = async (req, res) => {
  try {
    const data = await productSchema.findById(req.params.id);
    console.log(data);
    const updatedItem = await productSchema.updateOne(
      { _id: data },
      { $set: { name: req.body.name, email: req.body.email } }
    );
    res.json(updatedItem);
  } catch (err) {
    console.log("adddadfa");
    console.log(err);
  }
};

module.exports = { post, get, deleteVal, put };
