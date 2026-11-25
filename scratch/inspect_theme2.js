const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = 361559;
console.log(exodeIndex.slice(pos - 400, pos + 1200));
