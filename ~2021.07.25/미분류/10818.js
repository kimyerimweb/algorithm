const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let count = Number(input[0]);
const arr = input[1].split(" ").map(x=>Number(x));

let MAX_VALUE = -1000000
let MIN_VALUE = 1000000;

for(let k = 0; k < count ; k++){
    MAX_VALUE = (MAX_VALUE < parseInt(arr[k]))? parseInt(arr[k]): MAX_VALUE;
    MIN_VALUE = (MIN_VALUE > parseInt(arr[k]))? parseInt(arr[k]): MIN_VALUE;
}

console.log(`${MIN_VALUE} ${MAX_VALUE}`);