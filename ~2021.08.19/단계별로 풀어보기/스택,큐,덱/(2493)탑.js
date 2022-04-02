const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const max = input.shift();
const tower = input
  .shift()
  .split(" ")
  .map((el) => Number(el));
const stack = [];
const result = [];

tower.forEach((el, idx) => {
  while (stack.length === 0 || stack[stack.length - 1][1] < el) {
    if (stack.length === 0) {
      result.push(0);
      stack.push([idx + 1, el]);
      break;
    }
    stack.pop();
  }

  if (stack[stack.length - 1][1] > el) {
    result.push(stack[stack.length - 1][0]);
    stack.push([idx + 1, el]);
  }
});

console.log(result.join(" "));
