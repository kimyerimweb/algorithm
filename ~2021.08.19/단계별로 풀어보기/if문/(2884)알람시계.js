const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

const hour = input[0];
const minute = input[1];

const getTime = (hour, minute) => {
  if (minute >= 45) {
    console.log(hour, minute - 45);
  } else {
    if (hour === 0) {
      console.log(23, minute + 15);
    } else {
      console.log(hour - 1, minute + 15);
    }
  }
};

getTime(hour, minute);
