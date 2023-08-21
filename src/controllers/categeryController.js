const categerySchema = require("../models/CategeryModel");

const createCategery = async (req, res) => {
  const data = new categerySchema({
    cname: req.body.cname,
    id: req.body.id,
  });
  try {
    const data1 = await data.save();
    res.status(200).json(data1);
  } catch {
    res.send("message:error");
  }
};

module.exports = createCategery;
