const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input.shift());

input = input
  .map((el) => el.split(" "))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0])
  .map((el) => el.join(" "));

console.log(input.join("\n"));
