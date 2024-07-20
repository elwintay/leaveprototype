const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user) => {
    const options = {
        algorithm: process.env.JWT_ALGORITHM,
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
    return jwt.sign(user, process.env.JWT_SECRET_KEY, options)
};

const requireAuth = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "Error: Invalid token" });
      } else {
        console.log({
            message: "Verified successfully",
        })
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Error: No token found" });
  }
};

module.exports = { requireAuth, createToken };
