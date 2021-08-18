const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let inputs = input[0].split(" ");
//['10','5']

const NUMBER = Number(inputs[0]); //10
const RANGE = Number(inputs[1]); //5

inputs = input[1].split(" "); //['1','10','5'...]

let result='';
for(var k = 0; k < NUMBER ; k++){
    if(Number(inputs[k]) < RANGE){
        result += inputs[k] +' ';
    }
}

console.log(result);