const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

input = input.map(el => parseInt(el))
const N = parseInt(input.shift())

let count = 0
let prevHeight = 0
const maxHeight = Math.max(...input)

const getCount = () => {
    for(let i = 0; i < N; i++){
        if(maxHeight === input[i]){
            count++
            return
        }

        if(prevHeight < input[i] && maxHeight > input[i]){
            count++
            maxValue = input[i]
        }
    }
}

getCount()
console.log(count)
count = 0
prevHeight = 0
input.reverse()
getCount()
console.log(count)
