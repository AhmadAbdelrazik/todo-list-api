const {JwtError} = require('../utils/baseError');
const jwt = require('jsonwebtoken');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const authorize = function (req, res, next) {
  const authorization = req.headers?.authorization;
  if (!authorization) 
    throw JwtError('No token detected');
  
  const token = authorization.split(' ')[1];
  if (!token)
    throw JwtError('No token detected');

  jwt.verify(token, JWT_ACCESS_SECRET, (err, decode) => {
    if (err)
    throw JwtError('Invalid Token');

    req.userName = decode.userName;
  });

  next();
}

module.exports = authorize;