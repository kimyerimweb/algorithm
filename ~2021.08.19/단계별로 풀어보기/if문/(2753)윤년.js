const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const year = Number(input);

const isLeapyear = (year) => {
  if (year % 400 === 0) {
    return 1;
  }

  if (year % 4 === 0 && year % 100 !== 0) {
    return 1;
  }

  return 0;
};

console.log(isLeapyear(year));
