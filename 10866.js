const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let num = parseInt(input.shift())
let queue = []
let result = ''

for(let i = 0; i < input.length; i++){
    input[i] = input[i].split(" ")
}

function exploreQueue(input){
    switch(input[0]){
        case 'pop_front' : result += queue.length === 0 ? '-1\n' : `${queue.shift()}\n`
            break;
        case 'pop_back' : result += queue.length === 0 ? '-1\n' : `${queue.pop()}\n`
            break;
        case 'size' : result += `${queue.length}\n`
            break;
        case 'empty' : result += queue.length === 0 ? '1\n' : '0\n'
            break;
        case 'front' : result += queue.length === 0 ? '-1\n' : `${queue[0]}\n`
            break;
        case 'back' : result += queue.length === 0 ? '-1\n' : `${queue[queue.length-1]}\n`
        break;
        case 'push_front' : queue.unshift(input[1])
            break;
        default : queue.push(input[1]) 
    }
}

for(let i = 0; i < num; i++){
    exploreQueue(input[i])
}

console.log(result)