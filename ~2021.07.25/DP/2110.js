const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let NC = input.shift().split(' ')

let N = parseInt(NC[0])
let C = parseInt(NC[1])

input = input.map(el => parseInt(el)).sort((a,b) => a - b)

let min = 1
let max = input[N - 1] - input[0]
let result = 0

while(min <= max){
    let mid = Math.floor((min + max) / 2)
    let value = input[0]
    let count = 1

    for(let i = 1 ; i < N ; i++){
        if(value + mid <= input[i]){
            value = input[i]
            count++
        }
    }

    if(count >= C){
        min = mid + 1
        result = mid
        
    }else {
        max = mid - 1
    }
}

console.log(result)



