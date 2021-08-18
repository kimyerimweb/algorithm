const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let temp = input.shift().split(' ').map(el => parseInt(el))
const col = temp[0]
const row = temp[1]

let arr = new Array(col+1)
for (let i = 0;i < col+1;i++){
    arr[i] = new Array(row+1).fill(0)
}

for(let i = 1;i < col+1;i++){
    [weight,value] = input.shift().split(' ').map(el => parseInt(el))

    for(let j = 1; j < row+1; j++){
        if(j < weight){
            arr[i][j] = arr[i-1][j]
        }
        else {
            arr[i][j] = Math.max(arr[i-1][j],arr[i-1][j-weight]+value)
        }
    }
}

console.log(arr[col][row])
