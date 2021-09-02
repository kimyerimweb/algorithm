const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const EUCLID = (input ** 2 * Math.PI).toFixed(6);
const TAXI = (input ** 2 * 2).toFixed(6);

console.log(EUCLID);
console.log(TAXI);
