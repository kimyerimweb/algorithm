const getQuadrant = (x, y) => {
  return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const X = input[0];
  const Y = input[1];

  console.log(getQuadrant(X, Y));

  process.exit();
});
