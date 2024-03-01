const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const user = await User.findOne({ authToken: token });
    if (!user) {
      throw new Error('User not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = authenticateUser;