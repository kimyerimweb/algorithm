const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let inputs = input[0].split(" ");
let k = 0;

while(inputs[0] !== "0" && inputs[1] !== "0"){
    console.log(Number(inputs[0])+Number(inputs[1]));
    k++;
    inputs = input[k].split(" ");
}