var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift());
var Y = parseInt(lines.shift());
var PROD = X * Y;
console.log("PROD = " + PROD);
