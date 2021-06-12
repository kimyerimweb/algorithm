const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString())

let arr = new Array(input + 1).fill(0)
arr[1] = 1
arr[2] = 2

for(let i = 3;i < input + 1;++i){
    arr[i] = (arr[i - 2] + arr[i - 1]) % 15746
}

console.log(arr[input])