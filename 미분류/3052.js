const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(x=>Number(x)).map(x => x%42);

let arr = [input[0]];

for(let k = 1 ;k < 10;k++){
    if(arr.indexOf(input[k])===-1){
        arr.push(input[k])
    }
}

console.log(arr.length)
