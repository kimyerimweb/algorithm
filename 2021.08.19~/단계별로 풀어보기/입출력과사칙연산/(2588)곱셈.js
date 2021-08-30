const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const first = Number(input[0]);
const second = Number(input[1]);
const splitSecond = input[1].split("").map((el) => Number(el));

console.log(first * splitSecond[2]);
console.log(first * splitSecond[1]);
console.log(first * splitSecond[0]);
console.log(first * second);
