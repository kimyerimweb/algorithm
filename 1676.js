const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

let two = 0
let five = 0

function getZero(input){
   for(let i = 2; i<= input;i*=2) two += Math.floor(input/i);
   for(let i = 5; i<= input;i*=5) five += Math.floor(input/i);

   return Math.min(two,five)
}

console.log(getZero(input))
