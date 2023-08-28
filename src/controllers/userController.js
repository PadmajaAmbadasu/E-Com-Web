const env = require("dotenv").config();
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwtToken = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error)
    res.send("message:error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      console.log("Process environment variables:", process.env);

      console.log("Access token secret:", process.env.ACCESS_TOKEN_SECRET);
      const accessToken = jwtToken.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" }
      );

      res.status(200).json(accessToken);
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const currentUser = async (req, res) => {
  res.json(req.user);
};

module.exports = { register, login, currentUser };
