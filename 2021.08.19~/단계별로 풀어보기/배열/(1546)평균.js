const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
let scores = input
  .shift()
  .split(" ")
  .map((el) => Number(el));
const MAX = Math.max(...scores);

filteredMean = scores
  .map((el) => (el / MAX) * 100)
  .reduce((acc, el) => acc + el, 0);

console.log((filteredMean / N).toFixed(3));
