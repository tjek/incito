const jsf = require('json-schema-faker');
const schema = require('./schemas/v1.0.0.schema');

jsf.option({
    alwaysFakeOptionals: true
});

jsf.resolve(schema).then((sample) => {
    console.log(JSON.stringify(jsf(sample), null, 2));
});