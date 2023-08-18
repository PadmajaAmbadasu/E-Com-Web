const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoute = require("./src/routes/router");
const userRoute = require("./src/routes/userRoute");

const app = express();

// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/create", productRoute);
app.use("/user", userRoute);

const PORT = 3000;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/e-commerce";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {

      console.log(`Server running in port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`DB failed - ${error.message}`);
  });

app.use(express.json());
