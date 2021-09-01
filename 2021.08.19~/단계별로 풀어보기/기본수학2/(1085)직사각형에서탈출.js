const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

const distance1 = x;
const distance2 = y;
const distance3 = w - x;
const distance4 = h - y;

console.log(Math.min(distance1, distance2, distance3, distance4));
