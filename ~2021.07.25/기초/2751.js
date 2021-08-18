const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(x => parseInt(x.trim()));

const N = input.shift()

let result = ''

let arr = new Array(2000001).fill(0)

for(let i = 0; i < N; i++){
    arr[input[i]+1000000]++
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){
        result += `${i-1000000}\n`        
    }
}

console.log(result.trim())