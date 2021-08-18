const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = parseInt(input.shift())
let count = Array(1000000+1).fill(0)
let stack = [0]

input = input[0].split(' ').map(x => parseInt(x))

for(let i = 0; i < 1000001 ;i++){
    count[input[i]]++
}

for(let i = 1; i < num ;i++){
    while(stack.length !==0 && (count[input[stack[stack.length - 1]]] < count[input[i]])){
        input[stack.pop()] = input[i]
    }
    stack.push(i)
}

while(stack.length > 0){
    input[stack.pop()] = -1
}

input = input.join(' ')

console.log(input)



