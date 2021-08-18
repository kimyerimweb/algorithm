const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let num = parseInt(input.shift())

for(let i = 0; i < num; i++){
    input[i] = input[i].split(" ")
    for(let j = 0; j < input[i].length;j++){
        input[i][j] = input[i][j].split('')
        input[i][j] = input[i][j].reverse()
        input[i][j] = input[i][j].join('')
    }
    input[i] = input[i].join(' ')
    console.log(input[i])
}

