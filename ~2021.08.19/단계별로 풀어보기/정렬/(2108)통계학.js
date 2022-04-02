const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const count = input.shift();
input = input.sort((a, b) => a - b);
const modeArr = new Array(8001).fill(0);

const getArithmeticMean = () => {
  return input.reduce((acc, el) => acc + el, 0) / count;
};

const getMedian = () => {
  return input[Math.floor(count / 2)];
};

const getMode = () => {
  input.forEach((el) => {
    modeArr[el + 4000]++;
  });

  let maxValue = -10000;
  modeArr.forEach((el) => {
    if (el > maxValue) maxValue = el;
  });

  let ResultArr = [];
  modeArr.forEach((el, idx) => {
    if (el === maxValue) ResultArr.push(idx);
  });
  ResultArr = ResultArr.sort((a, b) => a - b);

  return ResultArr.length === 1 ? ResultArr[0] - 4000 : ResultArr[1] - 4000;
};

const getRange = () => {
  return input[input.length - 1] - input[0];
};

console.log(Math.round(getArithmeticMean()));
console.log(getMedian());
console.log(getMode());
console.log(getRange());
