const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let num = parseInt(input.shift())
let stack = []
let result = ''

function isPS(ps){
    stack = []
    for(let i = 0;i < ps.length;i++){
        if(ps[i] === '('){
            stack.push(ps[i])
        }else {
            if(i === 0){
                result += 'NO\n'
                break
            }else {
                if(stack[stack.length - 1] === '('){
                    stack.pop()
                }else {
                    result += 'NO\n'
                    break
                }
            }
        }

        if(i === ps.length -1){
            result += (stack.length === 0 ) ? 'YES\n' : 'NO\n'
        }  
    }
}

for(let i = 0;i < num; i++){
    isPS(input[i])
}

console.log(result)