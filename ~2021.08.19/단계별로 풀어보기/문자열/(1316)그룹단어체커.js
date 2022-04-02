const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = Number(input.shift());

for (let i = 0; i < input.length; i++) {
  const currentWordSplitArr = input[i].split("");
  let checkerArr = [];
  let currentAlpabet = "";

  for (let j = 0; j < currentWordSplitArr.length; j++) {
    const splitword = currentWordSplitArr[j];
    if (currentAlpabet !== splitword) {
      if (!checkerArr.includes(splitword)) {
        currentAlpabet = splitword;
        checkerArr.push(splitword);
      } else {
        count--;
        break;
      }
    }
  }
}

console.log(count);
