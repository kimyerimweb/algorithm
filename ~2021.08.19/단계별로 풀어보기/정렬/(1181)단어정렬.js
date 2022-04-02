const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input.shift());

input = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
input = [...new Set(input)];

console.log(input.join("\n"));
