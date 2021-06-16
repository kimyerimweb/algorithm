const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let input = [5,3,5,7,2,9]

input = input.map(el => parseInt(el))
const N = parseInt(input.shift())

let count = 0
let maxValue = 0

const getCount = () => {
    for(let i = 0; i < N; i++){
        if(maxValue < input[i]){
            count++
            maxValue = input[i]
        }else{
            continue
        }
    }
}

getCount()

console.log(count)
count = 0
maxValue = 0
input.reverse()
getCount()
console.log(count)
