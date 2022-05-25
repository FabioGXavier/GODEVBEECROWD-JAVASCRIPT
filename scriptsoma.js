var input = require("fs").readFileSync("stdin", "utf-8");

var [x,y] = input.split(" ").map(valor => parseInt(valor));

var S =x + y;

console.log("X = " + S);