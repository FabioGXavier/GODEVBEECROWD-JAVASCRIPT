var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines);
const n = 3.14159;

var calcarea = (n * (raio * raio)).toFixed(4);

console.log(`A=${calcarea}`);
