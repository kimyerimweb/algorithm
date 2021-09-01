const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const point1 = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

const point2 = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

const point3 = input
  .shift()
  .split(" ")
  .map((el) => Number(el));

const getPoint = () => {
  const point = [];
  point[0] = point1[0] ^ point2[0] ^ point3[0];
  point[1] = point1[1] ^ point2[1] ^ point3[1];

  console.log(point.join(" "));
};

getPoint();
