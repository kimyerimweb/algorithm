const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

function Fibonacci(input){
    if(input === 0){
        return 0
    }else if(input === 1){
        return 1
    }else {
        return Fibonacci(input-1)+Fibonacci(input-2)
    }
}

console.log(Fibonacci(input))