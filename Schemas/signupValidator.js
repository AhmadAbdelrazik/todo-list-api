const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {type: "string"},
    userName: {type: "string"},
    password: {
      type: "string",
      minLength: 8
    }
  },
  required: ["userName", "password", "name"],
  additionalProperties: false,  
};

const validate = ajv.compile(schema);

module.exports = validate;