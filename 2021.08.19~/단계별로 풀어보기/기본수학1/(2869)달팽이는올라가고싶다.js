const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - A) / (A - B)) + 1);
