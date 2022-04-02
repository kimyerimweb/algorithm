const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const score = Number(input);

switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}
