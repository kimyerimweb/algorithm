const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let count = Number(input[0]);
let num = input[1].split("");
let result = 0;

for(let k = 0; k < count ; k++){
    result += Number(num[k]);
}

console.log(result);