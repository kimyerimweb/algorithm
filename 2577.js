const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const mul = (Number(input[0])*Number(input[1])*Number(input[2])).toString();
let count = Array(10).fill(0);

for(let k = 0; k < 9 ; k++){
    if(mul[k]===undefined) {break;}
    
    count[Number(mul[k])]++;
}

for(let k = 0; k < 10 ; k++){
    console.log(count[k]);
}