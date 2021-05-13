const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => parseInt(x)); //다 맞았는데 이상하면 trim꼭 넣자
const numMap = {}
const num = input.shift()

input.sort((a,b) => a-b)

for(let num of input){
    if(numMap[num]){
        numMap[num]++
    }else {
        numMap[num] = 1
    }
}

const reducer = ((accumulator, currnetValue) => accumulator + currnetValue)
let mean = Math.round(input.reduce(reducer)/num)

let center = input[Math.floor(input.length / 2)]

let hitMaxNum = Math.max.apply(null,Object.values(numMap))
let hitMaxNumArr = []
let hitMaxNumResult = 0
for(let num in numMap){
    if(numMap[num]===hitMaxNum){
        hitMaxNumArr.push(num)
    }
}

if(hitMaxNumArr.length > 1){
    hitMaxNumArr = hitMaxNumArr.sort((a,b)=>a-b)
    hitMaxNumResult = hitMaxNumArr[1]
} else {
    hitMaxNumResult = hitMaxNumArr[0]
}

let mode = parseInt(hitMaxNumResult)

let range = input[input.length-1] - input[0]

console.log(mean)
console.log(center)
console.log(mode)
console.log(range)

