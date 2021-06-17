const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const temp = input.shift().split(' ').map(el => parseInt(el))

let N = temp[0]
let S = temp[1]
let M = temp[2]

let arr = new Array(N + 1);

for(let i = 0 ; i < N + 1; i++){
    arr[i] = new Array(M + 1).fill(false)
}

arr[0][S] = true

input = input[0].split(' ').map(el => parseInt(el))

for(let i = 0;i < N;i++){
    let num = input.shift()

    for(let j = 0; j < M + 1;j++){
        if(arr[i][j] === true){
            if(j - num >= 0) arr[i+1][j-num] = true
            if(j + num <= M) arr[i+1][j+num] = true
        }
    }
    
}

let answer = -1

for(let i = M ; i >= 0 ; i--){
    if(arr[N][i] === true) {
        answer = i
        break
    }
}

console.log(answer)