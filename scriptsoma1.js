var input = require("fs").readFileSync("stdin", "utf-8");

var numeros = input.split("\n");

var X = parseInt(numeros.shift());
var Y = parseInt(numeros.shift());
var soma = X + Y;
console.log("X = " + soma);