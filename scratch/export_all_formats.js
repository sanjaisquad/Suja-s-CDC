const fs = require('fs');
const fflate = require('fflate');

const artboard = JSON.parse(fs.readFileSync('scratch/decompressed.json', 'utf8'));

// Format 1: { artboard: artboard }
const json1 = JSON.stringify({ artboard });
const def1 = fflate.deflateSync(fflate.strToU8(json1));
const b1 = new Uint8Array(4 + def1.length);
b1.set([66, 88, 48, 49], 0);
b1.set(def1, 4);
fs.writeFileSync('snap-ribbon.bexode', b1);

// Also format 2 in case: direct artboard
const json2 = JSON.stringify(artboard);
const def2 = fflate.deflateSync(fflate.strToU8(json2));
const b2 = new Uint8Array(4 + def2.length);
b2.set([66, 88, 48, 49], 0);
b2.set(def2, 4);
fs.writeFileSync('snap-ribbon-direct.bexode', b2);

// Also save snap-ribbon.json for fallback / direct inspection
fs.writeFileSync('snap-ribbon.json', json2);

console.log('Saved snap-ribbon.bexode, snap-ribbon-direct.bexode, and snap-ribbon.json');
