const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');
const pos = exodeIndex.indexOf('tile');
console.log('Searching for tile renderer...');
const matches = [...exodeIndex.matchAll(/case\s+"tile":|face\s*===\s*"tile"|theme\s*===\s*"paper"/g)];
matches.forEach(m => {
  console.log('Match:', m[0], 'at', m.index);
  console.log(exodeIndex.slice(m.index - 50, m.index + 350));
});
