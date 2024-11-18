const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
    const token = req.body.token; // 
  
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
