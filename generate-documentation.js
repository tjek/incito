const fs = require('fs');
const path = require('path');
const parse = require('json-schema-to-markdown')
const schema = require('./versions/1.0.0/schema');
const markdown = parse(schema());

console.log(markdown);

fs.writeFileSync(path.join(__dirname, 'versions', '1.0.0', 'documentation.md'), markdown);