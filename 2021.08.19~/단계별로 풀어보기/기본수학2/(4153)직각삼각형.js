const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input.length;

while (--count) {
  const triangle = input
    .shift()
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);

  if (triangle[0] ** 2 + triangle[1] ** 2 === triangle[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
