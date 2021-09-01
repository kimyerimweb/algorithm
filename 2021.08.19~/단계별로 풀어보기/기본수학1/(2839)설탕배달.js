const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let fiveShare = Math.floor(input / 5);
let fiveRemainder = input - fiveShare * 5;

const getAnswer = (fiveShare, fiveRemainder) => {
  const threeRemainder = fiveRemainder % 3;

  if (threeRemainder === 0) {
    console.log(fiveShare + fiveRemainder / 3);
  } else {
    if (fiveShare === 0) {
      console.log(-1);
    } else {
      fiveRemainder += 5; //위의 과정 다시 연산
      fiveShare -= 1;
      getAnswer(fiveShare, fiveRemainder);
    }
  }

  return;
};

getAnswer(fiveShare, fiveRemainder);
