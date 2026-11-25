const fs = require('fs');
const fflate = require('fflate');

// Read the decompressed JSON from Screen 1.exode
const artboard = JSON.parse(fs.readFileSync('scratch/decompressed.json', 'utf8'));

// Format 1: BX01 header + deflateSync of JSON string
const jsonStr = JSON.stringify({ artboard: artboard });
const jsonBuf = fflate.strToU8(jsonStr);
const deflated = fflate.deflateSync(jsonBuf);

const header = new Uint8Array([66, 88, 48, 49]); // 'B', 'X', '0', '1'
const bexodeData = new Uint8Array(header.length + deflated.length);
bexodeData.set(header, 0);
bexodeData.set(deflated, header.length);

fs.writeFileSync('snap-ribbon.bexode', bexodeData);
console.log('Created snap-ribbon.bexode, size:', bexodeData.length);
