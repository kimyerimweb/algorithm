const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = parseInt(input.shift())

arr = new Array(N)
for(let i = 0; i < N;i++){
    arr[i] = new Array(N).fill(1)
}

input = input[0].split(' ').map(el => parseInt(el))

for(let i = 1; i < N ; i++){
    for(let j = 0; j < i ; j++){
        arr[i][j] = arr[i-1][j]   
        if(input[i] > input[j] && arr[i][i] < arr[i][j] + 1){
            arr[i][i] = arr[i][j] + 1
        }
    }
}

const answer = Math.max(...arr[N-1])

console.log(answer)