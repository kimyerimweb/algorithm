const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let fiboArr = new Array(input + 1).fill(0)
fiboArr[1] = 1
fiboArr[2] = 1

for(let i = 3;i < input + 1;i++){
    fiboArr[i] = fiboArr[i - 2] + fiboArr[i - 1]
}

console.log(fiboArr[input])