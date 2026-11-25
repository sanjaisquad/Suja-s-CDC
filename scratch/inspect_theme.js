const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = exodeIndex.indexOf('motionTheme');
console.log('motionTheme at:', pos);
if (pos !== -1) {
  console.log(exodeIndex.slice(pos - 100, pos + 500));
}
