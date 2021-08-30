const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input.shift());

for (let i = 0; i < count; i++) {
  const num = input[i].split(" ").map((el) => Number(el));
  console.log(num[0] + num[1]);
}
