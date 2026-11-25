const fs = require('fs');
const lz = require('lz-string');
const data = fs.readFileSync('assets/Screen 1.exode', 'utf8').trim();
console.log('Raw data length:', data.length);
let res = lz.decompressFromEncodedURIComponent(data);
if (!res) res = lz.decompressFromBase64(data);
if (!res) res = lz.decompress(data);
if (!res) res = lz.decompressFromUTF16(data);

if (res) {
  console.log('Decompressed length:', res.length);
  try {
    const json = JSON.parse(res);
    console.log('JSON Keys:', Object.keys(json));
    console.log('Artboard name:', json.name || json.title);
    if (json.inputs) console.log('Inputs:', JSON.stringify(json.inputs, null, 2));
    if (json.stateVariables) console.log('stateVariables:', JSON.stringify(json.stateVariables, null, 2));
    if (json.variables) console.log('variables:', JSON.stringify(json.variables, null, 2));
    fs.writeFileSync('scratch/decompressed.json', JSON.stringify(json, null, 2));
    console.log('Saved to scratch/decompressed.json');
  } catch(e) {
    console.log('Not JSON or error:', e.message);
    console.log(res.slice(0, 500));
  }
} else {
  console.log('Decompression failed');
}
