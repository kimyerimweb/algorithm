const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

const fixedCost = input[0];
const variableCost = input[1];
const price = input[2];

if (variableCost < price) {
  console.log(Math.floor(fixedCost / (price - variableCost)) + 1);
} else {
  console.log(-1);
}
