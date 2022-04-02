const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((el) => Number(el))
  .sort((a, b) => b - a)
  .join("");

console.log(input);
