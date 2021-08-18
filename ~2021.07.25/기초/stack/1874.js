const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => parseInt(x));
let inputLen = input.shift() * 2
let stack = []
let answer = ''
let num = 1


while(inputLen){
    if(input[0]!==stack[stack.length - 1]){
        stack.push(num)
        answer += '+\n'
        num++
    }else {
        stack.pop()
        input.shift()
        answer += '-\n'
    }
    inputLen--
}

answer = input.length ? 'NO' : answer.substr(0,answer.length-1)

console.log(answer)

