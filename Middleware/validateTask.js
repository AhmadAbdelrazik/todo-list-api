const ajv = require('ajv');
const {BadRequestError} = require('../utils/baseError');
const validate = require('../Schemas/taskValidator');

function isValidDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

const validateTask = function (req, res, next) {
  const valid = validate(req.body);

  if (!valid)
    throw new BadRequestError(`${validate.errors}`);

  if (!isValidDate(req.body.startDate) || !isValidDate(req.body.endDate))
    throw new BadRequestError(`Invalid Date`);

  next();    
}

module.exports = validateTask;