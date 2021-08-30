const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));

let maxValue = 0;
let maxIndex = 0;

input.forEach((el, idx) => {
  if (maxValue < el) {
    maxValue = el;
    maxIndex = idx;
  }
});

console.log(maxValue);
console.log(maxIndex + 1);
