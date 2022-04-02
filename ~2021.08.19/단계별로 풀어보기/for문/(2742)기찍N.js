const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const count = Number(input);
let result = "";

for (let i = count; i > 0; i--) {
  result += `${i}\n`;
}

console.log(result);
