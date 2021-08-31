const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

input = input - 1;
let n = 0;

while (true) {
  input = input - n * 6;

  if (input <= 0) {
    console.log(n + 1);
    break;
  } else {
    n++;
  }
}
