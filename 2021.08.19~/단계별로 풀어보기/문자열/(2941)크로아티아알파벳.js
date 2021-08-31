const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

croatia.forEach((el) => {
  const reg = new RegExp(el, "gi");
  input = input.replace(reg, "a");
});

console.log(input.length);
