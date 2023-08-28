const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.json());
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");
const categoryRouter = require("./routes/categoryRouter");

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/order",orderRouter)
app.use("/category",categoryRouter)

const PORT = 3000;

const url = "mongodb://127.0.0.1:27017/mydb";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("error", (err) => {
  console.error("Error connecting to the database:", err);
});

con.once("open", () => {
  console.log("DB Connected...");
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
