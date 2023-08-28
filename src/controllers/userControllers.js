const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../config/dev.json");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const body = req.body;
    body.uuid = uuidv4();
    console.log("Received registration request:", { username, email });

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("Hashed password:", hashedPassword);
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

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

    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username, email: user.email, role: user.role },
      config.jwtSecretKey,
      { expiresIn: 86400 }
    );

    // Return success message and token
    const data = {
      message: "Login successful",
      accessToken: token,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { register, login };
