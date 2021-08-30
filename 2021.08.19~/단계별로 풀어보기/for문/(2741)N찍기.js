const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const count = Number(input);
let result = "";

for (let i = 1; i <= count; i++) {
  result += `${i}\n`;
}

console.log(result);
