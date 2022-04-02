const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number(input.shift());
const arr = Array.from(new Array(15), (el) => new Array(14).fill(0));
arr[0] = arr[0].map((el, idx) => idx + 1);
for (let i = 0; i < 15; i++) {
  arr[i][0] = 1;
}

const getPeople = (K, N) => {
  for (let i = 1; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
    }
  }
  return arr[K][N];
};

for (let i = 0; i < count; i++) {
  const K = Number(input.shift());
  const N = Number(input.shift()) - 1; //이건 0호가 없어서..

  console.log(getPeople(K, N));
}
