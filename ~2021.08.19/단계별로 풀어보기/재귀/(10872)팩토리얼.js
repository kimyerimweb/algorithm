const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const factorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(--num);
  }
};

console.log(factorial(input));
