const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = exodeIndex.indexOf('[ExodeUI] Failed to load src:');
console.log(exodeIndex.slice(pos - 1200, pos + 200));
