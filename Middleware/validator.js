const ajv = require('ajv');
const {BadRequestError} = require('../utils/baseError');

/**
 * 
 * @param  validate ajv validate function.
 * @returns middleware to validate req.body
 */
const validator = function (validate) {
  return (req, res, next) => {
    const valid = validate(req.body);
    if (!valid) 
      throw new BadRequestError(validate.errors)
    
    next();
  }
}