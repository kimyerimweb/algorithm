const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const str1 = input[0].split('')
const str2 = input[1].split('')

const N = str1.length
const M = str2.length

let arr = new Array(N + 1)

for(let i = 0; i < N + 1 ; i++){
    arr[i] = new Array(M + 1).fill(0)    
}

str1.forEach((el1,idx1) => {
    str2.forEach((el2,idx2) => {
        if(el1 === el2){
            arr[idx1 + 1][idx2 + 1] = arr[idx1][idx2] + 1
        }else {
            arr[idx1 + 1][idx2 + 1] = Math.max(arr[idx1][idx2 + 1], arr[idx1 + 1][idx2])
        }
    })
});

console.log(arr[N][M])