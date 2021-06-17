const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

function factorial(input){
    if(input === 0 || input === 1){
        return 1;
    }else {
        return input*factorial(--input)
    }
}

console.log(factorial(input))
