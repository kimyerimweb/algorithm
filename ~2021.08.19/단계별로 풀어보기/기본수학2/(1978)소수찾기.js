const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input.shift());
const numArr = input[0].split(" ").map((el) => Number(el));
let answer = 0;

const isPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  } else {
    const sqrtNum = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= sqrtNum; i++) {
      const isPrime = num % i;
      if (!isPrime) {
        return false;
      }
    }
    return true;
  }
};

for (let i = 0; i < count; i++) {
  answer += isPrimeNumber(numArr[i]);
}

console.log(answer);
