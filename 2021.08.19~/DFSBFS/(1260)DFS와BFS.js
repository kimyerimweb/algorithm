const DFS = (num) => {
  visitedDfs[num] = true;
  dfsResult.push(num);

  for (let i = 1; i < graph.length; i++) {
    if (graph[num][i] === 1 && visitedDfs[i] === false) {
      DFS(i);
    }
  }

  return;
};

const BFS = (num) => {
  let queue = [];
  queue.push(num);
  visitedBfs[num] = true;

  while (queue.length !== 0) {
    let shiftQueue = queue.shift();
    bfsResult.push(shiftQueue);

    for (let i = 1; i < graph.length; i++) {
      if (graph[shiftQueue][i] && visitedBfs[i] === false) {
        queue.push(i);
        visitedBfs[i] = true;
      }
    }
  }

  return;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const visitedBfs = [];
const visitedDfs = [];
const dfsResult = [];
const bfsResult = [];
let graph = [];

rl.on("line", function (line) {
  input.push(line.toString());
}).on("close", function () {
  const [node, edge, num] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  graph = Array.from(Array(node + 1), () => Array(node + 1).fill(false));

  for (let i of input) {
    const [x, y] = i.split(" ").map((el) => Number(el));
    graph[x][y] = true;
    graph[y][x] = true;
  }

  visitedDfs = new Array(node + 1).fill(false);
  visitedBfs = new Array(node + 1).fill(false);

  DFS(num);
  BFS(num);

  console.log(dfsResult.join(" ") + "\n" + bfsResult.join(" "));
  process.exit();
});
