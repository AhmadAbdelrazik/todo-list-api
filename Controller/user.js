const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const {NotFoundError, UnauthorizedError} = require('../utils/baseError');
const statusCodes = require('../utils/statusCodes');

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;


const signup = async function (req, res) {
  const check = await User.find({userName: req.body.userName});

  if (check)
    throw new UnauthorizedError('Username is already taken');

  const hash = await bcrypt.hash(req.body.password, 10);  

  const user = new User({
    userName: req.body.userName,
    password: hash,
    name: req.body.name,
  });

  await user.save();

  const accessToken = jwt.sign(
    { userName: req.body.userName },
    JWT_ACCESS_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    { userName: req.body.userName },
    JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  res.status(statusCodes.success.Accepted).json({ refreshToken, accessToken });
}

const login = async function (req, res) {
  const user = await User.find({userName: req.body.userName});

  if (!user)
    throw new NotFoundError('Invalid Username or Password');
  
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    throw new NotFoundError('Invalid Username or Password');

  
  const accessToken = jwt.sign(
    { userName: req.body.userName },
    JWT_ACCESS_SECRET,
    { expiresIn: "15m" }
  );
  const refreshToken = jwt.sign(
    { userName: req.body.userName },
    JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ refreshToken, accessToken });
}

const renewToken = function (req, res) {
  const authorization = req.headers?.authorization;
  if (!authorization) 
    throw JwtError('No token detected');
  
  const token = authorization.split(' ')[1];
  if (!token)
    throw JwtError('No token detected');

  jwt.verify(token, JWT_REFRESH_SECRET, (err, decode) => {
    if (err)
    throw JwtError('Invalid Token');

  req.accessToken = jwt.sign(
    { userName: decode.userName },
    JWT_ACCESS_SECRET,
    { expiresIn: "15m"}
  );
    
  });
  
  res.json({accessToken: req.accessToken});
}