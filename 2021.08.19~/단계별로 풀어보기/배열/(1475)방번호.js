const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((el) => Number(el));

const numArr = new Array(10).fill(0);

input.forEach((el) => {
  ++numArr[el];
});

let max = 0;

for (let i = 0; i < 9; i++) {
  if (i === 6) {
    max =
      max > Math.ceil((numArr[i] + numArr[9]) / 2)
        ? max
        : Math.ceil((numArr[i] + numArr[9]) / 2);
  } else {
    max = max > numArr[i] ? max : numArr[i];
  }
}

console.log(max);
