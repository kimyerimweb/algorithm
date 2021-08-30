const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input.forEach((el) => {
  const scores = el.split(" ").map((el) => Number(el));
  const N = scores.shift();
  const meanValue = scores.reduce((acc, el) => acc + el, 0) / N;

  let percentage = 0;
  scores.forEach((el) => {
    percentage += el > meanValue ? 1 : 0;
  });

  console.log(`${((percentage / N) * 100).toFixed(3)}%`);
});
