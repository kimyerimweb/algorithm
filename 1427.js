const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('').map(x=>parseInt(x));

input.sort((a,b)=>b-a)

console.log(parseInt(input.join('')))