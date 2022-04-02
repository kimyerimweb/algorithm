const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input.shift());

for (let i = 0; i < count; i++) {
  const temp = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let distance = temp[1] - temp[0];

  if (distance <= 3) {
    console.log(distance);
  } else {
    const temp = Math.floor(Math.sqrt(distance));
    if (temp ** 2 === distance) {
      console.log(temp * 2 - 1);
    } else if (temp ** 2 + temp >= distance) {
      console.log(temp * 2);
    } else {
      console.log(temp * 2 + 1);
    }
  }
}
