const fs = require('fs');
const exodeIndex = fs.readFileSync('node_modules/exodeui/dist/index.js', 'utf8');

// Search for ExodeUICanvas definition
const match = exodeIndex.match(/function\s+Fw\s*\([^)]*\)\s*\{[\s\S]{1,1500}/);
if (match) {
  console.log('Fw definition:\n', match[0]);
} else {
  // Search for ExodeUICanvas export
  const idx = exodeIndex.indexOf('ExodeUICanvas');
  console.log('ExodeUICanvas near:', exodeIndex.slice(idx - 200, idx + 200));
}
