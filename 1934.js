const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = parseInt(input.shift())
let result  = []

for(let i = 0;i < num;i++){
    input[i] = input[i].split(' ')
}

function getDivisor(input,divisorArr){
    let x = 2
    while(input > 1){
        if(input % x === 0){
            input /= x
            divisorArr.push(x)
        }else{
            x++
        }
    }
}

function getLeastCommon(divA,divB){
    let x = 2
    let result = 1
    while(divA.length > 0 || divB.length > 0){
        if(divA[0] === x && divB[0] ===x){
            result *= x
            divA.shift()
            divB.shift()
        } else if(divA[0] !== x && divB[0] ===x){
            result *= x
            divB.shift()
        } else if(divA[0] === x && divB[0] !==x){
            result *= x
            divA.shift()
        } else {
            x++
        }
    }
    return result
}

for(let i = 0 ;i < num;i++){
    let divA = []
    let divB = []

    getDivisor(input[i][0],divA)
    getDivisor(input[i][1],divB)

    result.push(getLeastCommon(divA,divB))
}

console.log(result.join('\n'))