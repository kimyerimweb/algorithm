const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input.shift());

for (let i = 0; i < count; i++) {
  const [H, W, N] = input[i].split(" ").map((el) => Number(el));

  if (H === 1) {
    console.log(100 + N);
    continue;
  }
  const floor = N % H === 0 ? H : N % H;
  const room = Math.ceil(N / H);

  console.log(floor * 100 + room);
}
