const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

input.forEach((str) => {
  let score = 0;
  let result = 0;

  const strArr = str.split("");
  strArr.forEach((el) => {
    if (el === "O") {
      score++;
    } else {
      score = 0;
    }
    result += score;
  });
  console.log(result);
});
