const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input.shift());
let result = "";

for (let i = 0; i < count; i++) {
  const num = input[i].split(" ").map((el) => Number(el));

  result += `Case #${i + 1}: ${num[0] + num[1]}\n`;
}

console.log(result);
