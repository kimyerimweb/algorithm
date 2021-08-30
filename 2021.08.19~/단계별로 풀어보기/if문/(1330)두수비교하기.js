const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

const A = input[0];
const B = input[1];

switch (true) {
  case A > B:
    console.log(">");
    break;
  case A === B:
    console.log("==");
    break;
  default:
    console.log("<");
}
