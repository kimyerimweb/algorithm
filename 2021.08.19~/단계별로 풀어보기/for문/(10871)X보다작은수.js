const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

const N = num[0];
const X = num[1];

num = input
  .shift()
  .split(" ")
  .map((el) => Number(el))
  .filter((el) => el < X);

console.log(num.join(" "));
