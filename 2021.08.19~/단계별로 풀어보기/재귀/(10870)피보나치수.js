const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(input));
