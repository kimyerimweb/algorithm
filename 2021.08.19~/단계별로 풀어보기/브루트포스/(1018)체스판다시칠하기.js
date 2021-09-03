const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const whiteBoard = `WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`.split("\n");

const blackBoard = `BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB`.split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

input = input.map((el) => el.split(""));

const whiteArr = [];
const blackArr = [];
let white = 0;
let black = 0;

for (let x = 0; x < N - 7; x++) {
  for (let y = 0; y < M - 7; y++) {
    white = 0;
    black = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (whiteBoard[i - x][j - y] !== input[i][j]) white++;
        if (blackBoard[i - x][j - y] !== input[i][j]) black++;
      }
    }
    whiteArr.push(white);
    blackArr.push(black);
  }
}

console.log(Math.min(...whiteArr, ...blackArr));
