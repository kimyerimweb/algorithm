const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input.shift());

input = input[0].split(" ").map((el) => Number(el));

const sortedInput = [...new Set(input)].sort((a, b) => a - b);

let obj = {};

sortedInput.forEach((el, idx) => {
  obj[el] = idx;
});

input = input.map((el) => {
  return obj[el];
});

console.log(input.join(" "));
