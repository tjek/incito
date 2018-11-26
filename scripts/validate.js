const Ajv = require('ajv');
const schema = require('../schemas/v1.0.0.json');
const data = require('../examples/advanced');

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
    console.log(validate.errors);
} else {
    console.log('Valid');
}