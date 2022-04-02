const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const firstTerm = input[0]
  .split("")
  .reverse()
  .map((el) => Number(el));
const secondTerm = input[1]
  .split("")
  .reverse()
  .map((el) => Number(el));

const count = Math.max(firstTerm.length, secondTerm.length);
let answer = [0];

for (let i = 0; i < count; i++) {
  const first = isNaN(firstTerm[i]) ? 0 : firstTerm[i];
  const second = isNaN(secondTerm[i]) ? 0 : secondTerm[i];
  const term = isNaN(answer[i]) ? 0 : answer[i];

  const sum = first + second + term;
  answer[i] = sum % 10;
  if (sum >= 10) {
    answer[i + 1] = 1;
  }
}

answer = answer.reverse().join("");

console.log(answer);
