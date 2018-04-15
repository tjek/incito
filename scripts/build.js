const fs = require('fs');
const path = require('path');
const schema = require('../schemas/v1.0.0');

fs.writeFileSync(path.join(__dirname, '..', 'schemas', 'v1.0.0.json'), JSON.stringify(schema, null, 4));