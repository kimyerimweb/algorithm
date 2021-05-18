const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(x => parseInt(x));

let A = input[0]
let B = input[1]

let divisorA = []
let divisorB = []

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


function getMaxDivisor(divA,divB){
    let x = 2
    let result = 1
    while(divA.length > 0 || divB.length > 0){
        if(divA[0] === x && divB[0] ===x){
            result *= x
            divA.shift()
            divB.shift()
        } else if(divA[0] !== x && divB[0] ===x){
            divB.shift()
        } else if(divA[0] === x && divB[0] !==x){
            divA.shift()
        } else {
            x++
        }
    }

    return result
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

getDivisor(A,divisorA)
getDivisor(B,divisorB)

console.log(getMaxDivisor(divisorA,divisorB))

A = input[0]
B = input[1]
getDivisor(A,divisorA)
getDivisor(B,divisorB)
console.log(getLeastCommon(divisorA,divisorB))



