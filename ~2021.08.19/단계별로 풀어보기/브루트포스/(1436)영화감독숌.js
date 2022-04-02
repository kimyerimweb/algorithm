const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let count = 0;
let i = 0;

while (true) {
  if (String(++i).includes("666")) {
    ++count;

    if (count === input) {
      console.log(i);
      break;
    }
  }
}
