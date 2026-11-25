const fs = require('fs');
const lz = require('lz-string');
const fflate = require('fflate');

const path = 'C:/Users/sanjaij/.gemini/antigravity/brain/6b131e83-2c99-4463-84c1-03c7bbc187df/.user_uploaded/media_1795606677292_0213e343.exode';
const buf = fs.readFileSync(path);
console.log('File length:', buf.length, 'First 16 bytes:', [...buf.slice(0, 16)]);

const txt = buf.toString('utf8').trim();
let res = lz.decompressFromEncodedURIComponent(txt) || lz.decompressFromBase64(txt) || lz.decompress(txt);
if (!res && txt.startsWith('{')) res = txt;
if (!res && buf[0] === 66 && buf[1] === 88) {
  res = fflate.strFromU8(fflate.inflateSync(buf.subarray(4)));
}
if (!res) {
  console.log('Raw utf8 preview:', txt.slice(0, 300));
} else {
  const json = JSON.parse(res);
  console.log('Keys:', Object.keys(json));
  fs.writeFileSync('scratch/clothesline.json', JSON.stringify(json, null, 2));
  console.log('Saved scratch/clothesline.json');
  console.log('Objects:', json.objects?.map(o => ({ id: o.id, name: o.name, type: o.type, motion: o.options?.motion, options: o.options })));
}
