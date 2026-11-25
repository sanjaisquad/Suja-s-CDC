const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');

const wbIdx = exodeIndex.indexOf('function wb(');
console.log(exodeIndex.slice(wbIdx + 3000, wbIdx + 9000));
console.log('\n=== Fb ===');
const fbIdx = exodeIndex.indexOf('function Fb(');
console.log(exodeIndex.slice(fbIdx, fbIdx + 2500));
