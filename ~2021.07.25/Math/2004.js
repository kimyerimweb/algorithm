const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const N = parseInt(input[0])
const M = parseInt(input[1])

let two = 0
let five = 0


function getZero(N,M){
   for(let i = 2; i<= N;i*=2) { two += Math.floor(N/i); }
   for(let i = 5; i<= N;i*=5) { five += Math.floor(N/i); }

   for(let i = 2; i<= M;i*=2) { two -= Math.floor(M/i); }
   for(let i = 5; i<= M;i*=5) { five -= Math.floor(M/i); }

   for(let i = 2; i<= (N-M);i*=2) { two -= Math.floor((N-M)/i); }
   for(let i = 5; i<= (N-M);i*=5) { five -= Math.floor((N-M)/i); }

   return Math.min(two,five)

}

console.log(getZero(N,M))