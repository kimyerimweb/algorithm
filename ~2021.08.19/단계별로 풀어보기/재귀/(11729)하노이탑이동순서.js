const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let count = 0;
let move = "";

const hanoi = (start, middle, end, floor) => {
  count++;
  if (floor === 1) {
    return (move += `${start} ${end}\n`);
  }

  hanoi(start, end, middle, floor - 1);
  move += `${start} ${end}\n`;
  hanoi(middle, start, end, floor - 1);
};

hanoi(1, 2, 3, input);

console.log(count);
console.log(move);
