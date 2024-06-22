// Parse and validate integer parameters
const parseIntParam = (param) => {
  const int = parseInt(param, 10);
  return !isNaN(int) ? int : null;
};

// Parse and validate float parameters
const parseFloatParam = (param) => {
  const float = parseFloat(param);
  return !isNaN(float) ? float : null;
};

// Parse and validate date parameters
const parseDateParam = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date) ? date : null;
};

// Parse and validate boolean parameters
const parseBooleanParam = (param) => {
  if (param === 'true' || param === '1') return true;
  if (param === 'false' || param === '0') return false;
  return null;
};

// Parse and validate string parameters with length constraints
const parseStringParam = (param, minLength = 0, maxLength = Infinity) => {
  if (typeof param !== 'string') return null;
  if (param.length < minLength || param.length > maxLength) return null;
  return param;
};

// General param handler function
const handleParam = (param, parser, ...args) => {
  const parsedValue = parser(param, ...args);
  return parsedValue !== null ? parsedValue : null;
};

module.exports = {
  parseIntParam,
  parseFloatParam,
  parseDateParam,
  parseBooleanParam,
  parseStringParam,
  handleParam,
};
