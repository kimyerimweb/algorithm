const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el))

const num = input.shift()

let arr = new Array(11+1).fill(0)

arr[0] = 0
arr[1] = 1
arr[2] = 2
arr[3] = 4

for(let i = 4; i < 11+1 ; i++){
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
}

for(let i = 0; i < num; i++){
    let answer = input.shift()
    console.log(arr[answer])
}


