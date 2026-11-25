const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = exodeIndex.indexOf('Error in static frame render');
console.log(exodeIndex.slice(pos - 1500, pos + 500));
