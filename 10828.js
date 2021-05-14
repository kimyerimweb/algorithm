//stack
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let arr = []
let result = ''

let num = parseInt(input.shift())

for(let i = 0; i < num; i++){
    input[i] = input[i].split(" ")
    if(input[i][1]){
        input[i][1] = parseInt(input[i][1])
    }
}

function stackArr(input){
    for(let i = 0;i < num;i++){
        switch(input[i][0]){
            case 'pop' : result += arr.length < 1 ? '-1\n' : `${arr.pop()}\n`
            break;
            case 'size' : result += `${arr.length}\n`
            break;
            case 'empty' : result += arr.length > 0 ? '0\n' : '1\n'
            break;
            case 'top' : result += arr.length < 1 ? '-1\n' : `${arr[arr.length-1]}\n`
            break;
            default: arr.push(input[i][1])
        }
    }
}

stackArr(input)
console.log(result)


// let input = ['14','push 1','push 2','top','size','empty','pop','pop','pop','size','empty','pop','push 3','empty','top']