const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const first = Number(input[0]);
const second = Number(input[1]);

const three = second % 10; 
const four = Math.floor((second %100)/10); 
const five = Math.floor(second /100);

console.log(first * three);
console.log(first * four);
console.log(first * five);
console.log(first * second);
