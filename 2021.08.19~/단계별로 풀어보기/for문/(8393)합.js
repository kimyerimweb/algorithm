const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const count = Number(input);

let result = 0;

for (let i = 1; i <= count; i++) {
  result += i;
}

console.log(result);
