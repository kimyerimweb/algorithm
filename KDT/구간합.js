const n = 5
const data = [10,20,30,40,50]

let sumValue = 0
let prefixSum = [0] //0번째는 사람의 논리때문에 0으로 둔다.

for(let i of data){
    sumValue += i //값을 축적시킨다.
    prefixSum.push(sumValue)
}

const left = 3
const right = 4
console.log(prefixSum[right] - prefixSum[left - 1])