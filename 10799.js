const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

function cutStick(input){
    let result = 0;
    let stack = [];

    for(let i = 0; i < input.length;i++){
        if(input[i] === '('){
            stack.push('(')
        }else {
            stack.pop()
            if(input[i-1] === '('){
                result += stack.length
            }else {
                result += 1
            }
        }
    }
    return result
}

console.log(cutStick(input))


//((())) 이런 식으로 감싸져있을 때 레이저가 왼쪽에 있는 (의 개수만큼 한번 자를 때마다 생성하고
// 끝에 ))))밖에 안남았을 때, 맨 마지막 레이저를 지나간거라 )개수는 잘려서 남은 귀퉁이 철 개수이다.