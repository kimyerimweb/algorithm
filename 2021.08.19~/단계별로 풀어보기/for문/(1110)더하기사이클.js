const fs = require("fs");
const originNumber = Number(fs.readFileSync("/dev/stdin").toString());

let number = originNumber;
let count = 0;

while (true) {
  ++count;
  const oldSumNumber = Math.floor(number / 10) + (number % 10);
  number = (number % 10) * 10 + (oldSumNumber % 10);

  if (number === originNumber) {
    console.log(count);
    return;
  }
}
