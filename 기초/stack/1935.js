const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input.shift())

const state = input.shift()

input = input.map(el => parseInt(el))

let stack = []

for(let i = 0; i < state.length;i++){
    let temp = state[i]

    if(temp === '+'){
        const el2 = stack.pop()
        const el1 = stack.pop()

        stack.push(el1 + el2)

    }else if(temp === '-'){
        const el2 = stack.pop()
        const el1 = stack.pop()

        stack.push(el1 - el2)

    }else if(temp === '/'){
        const el2 = stack.pop()
        const el1 = stack.pop()

        stack.push(el1 / el2)

    }else if(temp === '*'){
        const el2 = stack.pop()
        const el1 = stack.pop()

        stack.push(el1 * el2)
    }else {
        const idx = temp.charCodeAt(0) - 'A'.charCodeAt(0)
        stack.push(input[idx])
    }
}

const answer = stack.pop().toFixed(2)

console.log(answer)