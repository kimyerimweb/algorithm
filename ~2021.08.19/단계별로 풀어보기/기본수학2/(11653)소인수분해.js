const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());
const arr = [];
let prime = 2;

const doPrimeFactorization = (input) => {
  while (input > prime) {
    if (input % prime === 0) {
      input = input / prime;
      arr.push(prime);
    } else {
      prime++;
    }
  }

  if (prime !== 1) {
    arr.push(prime);
  }
};

doPrimeFactorization(input);
console.log(arr.join("\n"));
