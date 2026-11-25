const fs = require('fs');
const json = JSON.parse(fs.readFileSync('scratch/decompressed.json', 'utf8'));

console.log('--- Objects ---');
json.objects.forEach(obj => {
  console.log(`Object: ${obj.name} (type: ${obj.type}, id: ${obj.id})`);
  if (obj.inputs) console.log('  Inputs:', Object.keys(obj.inputs));
  if (obj.props) console.log('  Props:', Object.keys(obj.props));
});

console.log('--- State Machine ---');
if (json.stateMachine) {
  console.log('Inputs:', json.stateMachine.inputs);
  console.log('States / Transitions count:', json.stateMachine.states?.length, json.stateMachine.transitions?.length);
}
