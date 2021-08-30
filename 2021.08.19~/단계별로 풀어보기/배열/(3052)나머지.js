const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el) % 42);

const result = [input[0]];

for (let i = 1; i < 10; i++) {
  if (result.indexOf(input[i]) === -1) {
    result.push(input[i]);
  }
}

console.log(result.length);
