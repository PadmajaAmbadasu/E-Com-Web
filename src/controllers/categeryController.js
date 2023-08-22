const categerySchema = require("../models/CategeryModel");

const create = async (req, res) => {
  const data = new categerySchema({
    cname: req.body.cname,
    id: req.body.id,
  });
  try {
    const data2 = await data.save();
    res.status(200).json(data2);
  } catch {
    res.send("message:error");
  }
};

module.exports = {create};
