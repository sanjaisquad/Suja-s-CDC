const fs = require('fs');
const fflate = require('fflate');

function Ag(e){
  const t=e instanceof Uint8Array?e:new Uint8Array(e),i=new Map;
  let n=null;
  if(t[0]===66&&t[1]===88&&t[2]===48&&t[3]===49){
    const r=fflate.inflateSync(t.subarray(4));
    n=JSON.parse(fflate.strFromU8(r));
    return n;
  }
}

const data = fs.readFileSync('snap-ribbon.bexode');
const res = Ag(data);
console.log('Tested Ag on snap-ribbon.bexode. Artboard name:', res?.artboard?.name || res?.name);
