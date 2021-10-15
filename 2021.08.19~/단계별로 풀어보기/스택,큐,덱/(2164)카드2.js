const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const queue = new Array(input).fill(1).map((el, idx) => el + idx);

const shuffle = () => {
  queue.shift();
  const shuffleCard = queue.shift();
  queue.push(shuffleCard);
};

while (queue.length > 1) {
  shuffle();
}

console.log(queue[0]);
