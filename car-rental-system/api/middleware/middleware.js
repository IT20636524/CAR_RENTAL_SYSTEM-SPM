const jwt = require("jsonwebtoken");

const User = require("../models/User");
 const protect = async (req, res, next) => {
    const token = req.headers.authorization ? (req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null) : null
    if (!token) return res.status(403).json('Unauthorized');
    const decodedUser =  jwt.verify(token, process.env.JWT_SECRET || 'jsecret').data
    const user = decodedUser ? await User.findOne({ 'user_id':decodedUser.user_id }) : null
    if (!user) return res.status(403).json('Unauthorized');
    req.user = user
    next()
  }

  module.exports = protect;