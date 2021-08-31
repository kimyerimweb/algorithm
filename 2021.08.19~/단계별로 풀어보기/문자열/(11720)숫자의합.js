const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numArr = input[1].split("").map((el) => Number(el));

console.log(numArr.reduce((acc, el) => acc + el, 0));
