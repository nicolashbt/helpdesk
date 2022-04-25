const asyncHandler = require("express-async-handler");

// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Some fields are missing");
  }

  res.send("register route");
});

// @route /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  registerUser,
  loginUser,
};
