const fs = require('fs');
const path = require('path');
const schema = require('./generate-schema');

fs.writeFileSync(path.join(__dirname, 'schemas', 'v1.0.0.json'), JSON.stringify(schema, null, 4));