const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const arr = [];

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

for (let i = input[0]; i <= input[1]; i++) {
  isPrimeNumber(i);
}

if (arr.length) {
  const sum = arr.reduce((acc, el) => acc + el, 0);
  const min = Math.min(...arr);

  console.log(sum);
  console.log(min);
} else {
  console.log(-1);
}
