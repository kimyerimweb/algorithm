const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString())

let arr = new Array(1001).fill(0)

arr[1] = 1
arr[2] = 2

for(let i = 3; i < input+1 ; i++){
    arr[i] = (arr[i-1] + arr[i-2]) % 10007
}

console.log(arr[input])
