const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;

while (true) {
  const num = input[i].split(" ");
  const A = Number(num[0]);
  const B = Number(num[1]);

  if (A === 0 && B === 0) {
    break;
  } else {
    console.log(A + B);
    i++;
  }
}
