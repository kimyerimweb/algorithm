const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(x => parseInt(x));

let num = input[0];
let interval = input[1];
let index = 0;
let result = [];
let arr = [];
    
for(let i = 1; i <= num; i++){
    arr.push(i)
}

function Josepus(){
    while(interval-1 > arr.length){
        interval -= arr.length
    }
    let temp1 = arr.slice(0,interval-1)
    let temp2 = arr.slice(interval-1,arr.length)
    arr = temp2.concat(temp1)
    result.push(arr.shift())
    interval = input[1]
}

for(let i = 0; i < num;i++){
    Josepus()
}

console.log(`<${result.join(", ")}>`)