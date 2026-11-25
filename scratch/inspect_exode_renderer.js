const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');

// Find wb( definition and g-clothesline definition and Fb( definition
const gClothIdx = exodeIndex.indexOf('g-clothesline');
console.log('=== g-clothesline ===');
console.log(exodeIndex.slice(gClothIdx - 50, gClothIdx + 900));

const wbIdx = exodeIndex.indexOf('function wb(');
console.log('\n=== function wb ===');
console.log(exodeIndex.slice(wbIdx, wbIdx + 3500));
