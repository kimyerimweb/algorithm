const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const count = Number(input.shift());

const getBodyInfo = () => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    const temp = input[i].split(" ").map((el) => Number(el));
    arr = [...arr, { weight: temp[0], height: temp[1], rate: 1 }];
  }
  return arr;
};

const getAnswer = () => {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      if (i === j) {
        continue;
      } else {
        if (arr[i].weight < arr[j].weight && arr[i].height < arr[j].height) {
          arr[i].rate++;
        }
      }
    }
  }
};

const arr = getBodyInfo();
getAnswer(arr);
const answer = arr.reduce((acc, el) => acc + `${el.rate} `, "").trim();

console.log(answer);
