const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const arr = input.map(x=>Number(x));
let max = arr[0];
let index = 0;

for(let k = 1;k < 9;k++){
    if(max < arr[k]){
        max = arr[k];
        index = k;
    }
}

console.log(max);
console.log(index+1);