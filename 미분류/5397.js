const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const num = parseInt(input.shift())
let stack1 = []
let stack2 = []
let answer = ''

function getString(){
    str = input.shift()
    stack1 = []
    stack2 = []

    for(i = 0;i < str.length;i++){
        if(str[i] === '-'){
            if(stack1.length) stack1.pop()
        }else if(str[i] === '<'){
            if(stack1.length) stack2.push(stack1.pop())
        }
        else if(str[i] === '>'){
            if(stack2.length) stack1.push(stack2.pop())
        }
        else {
            stack1.push(str[i])
        }
    }
    return stack1.join('') + stack2.reverse().join('')
}

for(let i = 0; i < num ;i++){
    answer = answer + getString() + '\n'
}

console.log(answer.slice(0,answer.length - 1))

