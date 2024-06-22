const { parseDateParam, parseIntParam, parseFloatParam, parseBooleanParam, parseStringParam, handleParam } = require('../utils/paramParser');

const handleIntParam = (req, res, next, value, name) => {
  const int = handleParam(value, parseIntParam);
  if (int === null) {
    return res.status(400).json({ error: `Invalid integer for parameter ${name}` });
  }
  req.params[name] = int;
  next();
};

const handleFloatParam = (req, res, next, value, name) => {
  const float = handleParam(value, parseFloatParam);
  if (float === null) {
    return res.status(400).json({ error: `Invalid float for parameter ${name}` });
  }
  req.params[name] = float;
  next();
};

const handleDateParam = (req, res, next, value, name) => {
  const date = handleParam(value, parseDateParam);
  if (date === null) {
    return res.status(400).json({ error: `Invalid date for parameter ${name}` });
  }
  req.params[name] = date;
  next();
};

const handleBooleanParam = (req, res, next, value, name) => {
  const bool = handleParam(value, parseBooleanParam);
  if (bool === null) {
    return res.status(400).json({ error: `Invalid boolean for parameter ${name}` });
  }
  req.params[name] = bool;
  next();
};

const handleStringParam = (minLength, maxLength) => (req, res, next, value, name) => {
  const str = handleParam(value, parseStringParam, minLength, maxLength);
  if (str === null) {
    return res.status(400).json({ error: `Invalid string for parameter ${name}` });
  }
  req.params[name] = str;
  next();
};

module.exports = {
  handleIntParam,
  handleFloatParam,
  handleDateParam,
  handleBooleanParam,
  handleStringParam,
};
