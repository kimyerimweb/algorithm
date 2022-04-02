const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map((el) => Number(el));
const card = input[1].split(" ").map((el) => Number(el));

let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = card[i] + card[j] + card[k];
      if (M < sum) {
        continue;
      } else {
        if (M - answer > M - sum) {
          answer = sum;
        }
      }
    }
  }
}

console.log(answer);
