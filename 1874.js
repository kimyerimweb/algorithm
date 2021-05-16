const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => parseInt(x));
let num = input.shift()
let stack = [1]
let result = '+\n'

input = input.reverse()

function getSequence(){
    for(i = 1;i <= num;){
        if(input.length === 0){ break }
        else {
            if(input[input.length - 1] === stack[stack.length - 1]){
                input.pop()
                stack.pop()
                result += '-\n'
            }else {
                ++i
                stack.push(i)
                result += '+\n'     
            }
        }
    }

    result = input.length !== 0 ? 'NO' : result.substr(0,result.length-1)
}

getSequence(input)

console.log(result)