const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let NM = input.shift().split(' ').map(el => parseInt(el))

const N = NM[0]
const M = NM[1]

for(let i = 0; i < N ; i++){
    input[i] = input[i].split('')
}

let NArr = new Array(N).fill(0)
let MArr = new Array(M).fill(0)

for(let i = 0; i < N ; i++){
    for(let j = 0; j < M ; j++){
        if(input[i][j] === 'X'){
            NArr[i]++
            MArr[j]++
        }
    }
}

let Ncount = 0
let Mcount = 0

for(let i = 0; i < N ; i++){
    if(NArr[i] === 0){
        Ncount++
    }
}


for(let i = 0; i < M ; i++){
    if(MArr[i] === 0){
        Mcount++
    }
}

console.log(Math.max(Ncount,Mcount))