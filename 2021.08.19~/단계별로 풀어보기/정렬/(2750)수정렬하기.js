const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const count = input.shift();
const answer = input.sort((a, b) => a - b);

console.log(answer.join("\n"));
