const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../config/dev.json");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Received registration request:", { username, email });

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("Hashed password:", hashedPassword);
    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();
    console.log(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored+  hash
    const passwordMatch = await bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
const token = jwt.sign(
  { email: user.email, uuid: user.uuid, role: user.role },
  config.jwtSecretKey,
  { expiresIn: 86400 }
);
const data = {accessToken: token, email: user.email, username: user.username, role: user.role};
return data;
};
module.exports = { register, login };
