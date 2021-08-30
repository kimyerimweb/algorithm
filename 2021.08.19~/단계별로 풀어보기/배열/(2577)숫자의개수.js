const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));

const multipleNumber = String(input[0] * input[1] * input[2]).split("");
const arr = new Array(10).fill(0);

multipleNumber.forEach((el) => {
  arr[el]++;
});

console.log(arr.join("\n"));
