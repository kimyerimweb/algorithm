const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const start = parseInt(input[0])
const end = parseInt(input[1])

let result = []

function isPrimeNumber(value){
    if(value === 1){
        return
    }else {
        if(value === 2){
            result.push(2)
            return
        }else {
            for(let i = 2;i <= Math.floor(Math.sqrt(value));i++){
                if(value % i === 0){
                    return
                }
            }
            result.push(value)
            return
        }
    }
}

for(let i = start;i <= end;i++){
    isPrimeNumber(i)
}

console.log(result.join('\n'))