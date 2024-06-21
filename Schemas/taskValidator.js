const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    status: {
      type: "string",
      enum: ['To Do', 'In Progress', 'Blocked', 'Completed', 'Cancelled'],
    },
    startDate: { type: "string" },
    endDate: { type: "string" },
  },
  required: ["title", "status"],
  additionalProperties: false,  
};

const validate = ajv.compile(schema);

module.exports = validate;