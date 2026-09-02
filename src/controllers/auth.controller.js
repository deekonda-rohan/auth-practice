const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token)

  res.status(201).json({
    message: "User register successfully",
    user,
    token,
  });
};

module.exports = { registerUser };
