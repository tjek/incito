const jsf = require('json-schema-faker');
const schema = require('../schemas/v1.0.0');

jsf.option({
    alwaysFakeOptionals: true
});

module.exports = () => {
    return jsf.resolve(schema);
};