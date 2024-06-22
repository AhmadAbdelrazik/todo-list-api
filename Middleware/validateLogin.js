const ajv = require('ajv');
const {BadRequestError} = require('../utils/baseError');
const validate = require('../Schemas/loginValidator');


const validateLogin = function (req, res, next) {
  const valid = validate(req.body);

  if (!valid)
    throw new BadRequestError(`${validate.errors}`);

  next();    
}

module.exports = validateLogin;