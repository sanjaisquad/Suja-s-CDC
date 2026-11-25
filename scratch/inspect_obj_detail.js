const fs = require('fs');
const json = JSON.parse(fs.readFileSync('scratch/decompressed.json', 'utf8'));
console.log('Object details:', JSON.stringify(json.objects[0], null, 2));
