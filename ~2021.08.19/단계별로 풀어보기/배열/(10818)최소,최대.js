const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = input.shift();
const numArr = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

let max = -1000000;
let min = 1000000;

numArr.forEach((el) => {
  max = max < el ? el : max;
  min = min > el ? el : min;
});

console.log(min, max);
