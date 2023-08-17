const express = require("express");
const router = express.Router();
const productSchema = require("../models/productSchema");

router.post("/", async (req, res) => {
  const data = new userSchema({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const data1 = await data.save();
    res.json(data1);
  } catch {
    res.send("message:error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await productSchema.findById(req.params.id);
    const data1 = data.deleteOne();
    res.json(data1);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  const data = await productSchema.find();
  res.json(data);
});

router.put("/:id", async (req, res) => {
  try{
  const data = await productSchema.findById(req.params.id)
  console.log(data)
  const updatedItem = await productSchema.updateOne(
     {_id: data },
     { $set: { name: req.body.name, email: req.body.email }},
    
  );
  res.json(updatedItem);
  }catch(err){
    console.log("adddadfa");
    console.log(err);
  }
});

module.exports = router;
