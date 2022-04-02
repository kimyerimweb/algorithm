const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const first = Number(input[0].split("").reverse().join(""));
const second = Number(input[1].split("").reverse().join(""));

first > second ? console.log(first) : console.log(second);
