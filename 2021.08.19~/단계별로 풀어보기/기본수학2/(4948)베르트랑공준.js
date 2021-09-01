const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const isPrimeNumber = (num) => {
  if (num === 1) {
    return;
  } else if (num !== 1 && num <= 3) {
    arr.push(num);
  } else {
    const sqrtNum = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= sqrtNum; i++) {
      const isPrime = num % i;
      if (!isPrime) {
        return;
      }
    }
    arr.push(num);
  }
};

let arr = [];

for (let k = 0; k < input.length - 1; k++) {
  arr = [];
  for (let i = input[k] + 1; i <= 2 * input[k]; i++) {
    isPrimeNumber(i);
  }
  console.log(arr.length);
}
