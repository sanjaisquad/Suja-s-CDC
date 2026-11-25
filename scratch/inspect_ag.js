const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = exodeIndex.indexOf('function Ag(');
console.log(exodeIndex.slice(pos, pos + 1000));
