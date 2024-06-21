const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    userName: {type: "string"},
    password: {
      type: "string",
      minLength: 8
    }
  },
  required: ["userName", "password"],
  additionalProperties: false,  
};

const validate = ajv.compile(schema);

module.exports = validate;