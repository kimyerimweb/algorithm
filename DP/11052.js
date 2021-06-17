const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input.shift())

input = input.shift().split(' ').map(el => parseInt(el))
input.unshift(0)

for(let i = 1; i < N+1; i++){
    let temp = []
    for(let j = 1; j <= Math.floor(i/2);j++){
        temp.push(input[j]+input[i-j])
    }

    input[i] = Math.min(...temp,input[i])
}

console.log(input[N])
