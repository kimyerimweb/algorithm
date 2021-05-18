const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = parseInt(input.shift().trim())
let count = Array(num+1).fill(0)
let stack = []

input = input[0].split(' ').map(x => parseInt(x))

function countNum(){
    for(let i = 0; i < num;i++){
        count[input[i]]++
    }
}

function rightMany(){
    for(let i = 0; i < num;i++){
        while(stack.length !== 0 && count[input[stack[stack.length-1]]] < count[input[i]]){
            input[stack.pop()] = input[i] 
            }
        stack.push(i)
    }

    while(stack.length > 0){
        input[stack.pop()] = -1
    }
}

countNum()
rightMany()

console.log(input.join(' '))