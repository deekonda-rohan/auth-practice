const express = require("express");
const jwt = require("jsonwebtoken");

const postRouter = express.Router();

postRouter.post("/posts", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
  } catch (error) {
    return res.status(401).json({
      message: "token not matching",
    });
  }

  res.status(201).json({
    message : "Post created successfully",
  })

});

module.exports = postRouter;
